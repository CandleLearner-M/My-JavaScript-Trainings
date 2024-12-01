# Set the path to your project directory
$path = "D:\Training\training"
Set-Location $path

# Initialize the FileSystemWatcher
$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $path
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true

# Define the action to take when a change is detected
$action = {
    param($source, $e)
    
    # Create a script-level variable for the path
    $scriptPath = "D:\Training\training"
    
    try {
        Set-Location $scriptPath
        # Add a small delay to ensure file operations are complete
        Start-Sleep -Seconds 1
        
        # Execute git commands
        git add .
        if (git status --porcelain) {
            git commit -m "Automated commit: Changes in $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
            git push
            Write-Host "Changes committed and pushed at $(Get-Date)"
        } else {
            Write-Host "No changes to commit"
        }
    } catch {
        Write-Host "Error occurred: $_"
    }
}

# Register the event handlers
Register-ObjectEvent $watcher -EventName Created -Action $action
Register-ObjectEvent $watcher -EventName Changed -Action $action
Register-ObjectEvent $watcher -EventName Deleted -Action $action
Register-ObjectEvent $watcher -EventName Renamed -Action $action

# Keep the script running
while ($true) { Start-Sleep 1 }