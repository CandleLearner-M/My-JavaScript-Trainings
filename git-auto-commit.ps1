# Set the path to your project directory
$path = "D:\Training\training"
Set-Location $path

# File to store daily commit data
$stateFile = Join-Path $path ".git-auto-commit-state.json"

# Initialize or load tracking variables
if (Test-Path $stateFile) {
    try {
        $stateData = Get-Content $stateFile | ConvertFrom-Json
        $global:state = @{
            dailyCommitCount   = [int]$stateData.commitCount
            lastResetDate      = ([DateTime]::Parse($stateData.lastResetDate)).ToUniversalTime().Date
            targetCommitsToday = [int]$stateData.targetCommits
        }
    } catch {
        Write-Host "Error reading state file: $_"
        # Initialize variables if state file is corrupted
        $global:state = @{
            dailyCommitCount   = 0
            lastResetDate      = [DateTime]::UtcNow.Date
            targetCommitsToday = Get-Random -Minimum 12 -Maximum 81
        }
        # Save initial state
        $global:state | ConvertTo-Json | Set-Content $stateFile
    }
} else {
    # State file does not exist, initialize variables
    $global:state = @{
        dailyCommitCount   = 0
        lastResetDate      = [DateTime]::UtcNow.Date
        targetCommitsToday = Get-Random -Minimum 12 -Maximum 81
    }
    # Save initial state
    $global:state | ConvertTo-Json | Set-Content $stateFile
}

# Initialize the FileSystemWatcher
$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $path
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true

# Define the action to take when a change is detected
$action = {

    # Path and state file
    $scriptPath = "D:\Training\training"
    $stateFile = Join-Path $scriptPath ".git-auto-commit-state.json"

    try {
        # Check if we've exceeded the daily commit limit
        if ($global:state.dailyCommitCount -ge $global:state.targetCommitsToday) {
            Write-Host "Daily commit limit reached ($($global:state.dailyCommitCount)/$($global:state.targetCommitsToday)). Waiting for next day."
            return
        }

        Set-Location $scriptPath
        Start-Sleep -Seconds 1

        # Execute git commands
        git add .
        if (git status --porcelain) {
            git commit -m "Automated commit: Changes on $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
            git push
            $global:state.dailyCommitCount++

            # Save updated state
            $global:state | ConvertTo-Json | Set-Content $stateFile

            Write-Host "Changes committed and pushed at $(Get-Date)"
            Write-Host "Daily commit count: $($global:state.dailyCommitCount)/$($global:state.targetCommitsToday)"
        } else {
            Write-Host "No changes to commit"
        }
    } catch {
        Write-Host "Error occurred in action block: $_"
    }
}

# Define a timer action to reset daily counters at midnight
$timerAction = {

    # Get the current date in UTC
    $currentDate = [DateTime]::UtcNow.Date
    if ($currentDate -ne $global:state.lastResetDate) {
        $global:state.dailyCommitCount   = 0
        $global:state.lastResetDate      = $currentDate
        $global:state.targetCommitsToday = Get-Random -Minimum 12 -Maximum 81

        # Save reset state
        $stateFile = Join-Path "D:\Training\training" ".git-auto-commit-state.json"
        $global:state | ConvertTo-Json | Set-Content $stateFile

        Write-Host "New day started. Target commits for today: $($global:state.targetCommitsToday)"
    }
}

# Set up a timer to check for date change every minute
$timer = New-Object Timers.Timer
$timer.Interval = 60000  # Check every 60,000 milliseconds (1 minute)
$timer.AutoReset = $true
$timer.Enabled = $true
Register-ObjectEvent -InputObject $timer -EventName Elapsed -Action $timerAction

# Register the event handlers for file changes
Register-ObjectEvent $watcher -EventName Created  -Action $action
Register-ObjectEvent $watcher -EventName Changed  -Action $action
Register-ObjectEvent $watcher -EventName Deleted  -Action $action
Register-ObjectEvent $watcher -EventName Renamed  -Action $action

# Display initial target
Write-Host "Starting script with target of $($global:state.targetCommitsToday) commits for today (Current count: $($global:state.dailyCommitCount))"

# Register cleanup using try-finally
try {
    while ($true) { Start-Sleep 1 }
} finally {
    $timer.Stop()
    $timer.Dispose()
    Get-EventSubscriber | Unregister-Event
    Get-Job | Remove-Job
}