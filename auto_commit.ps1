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
    git add .
    git commit -m "Automated commit"
    git push
    Write-Host "Changes committed and pushed." 
}

# Register the event handlers
Register-ObjectEvent $watcher -EventName Created -Action $action
Register-ObjectEvent $watcher -EventName Changed -Action $action
Register-ObjectEvent $watcher -EventName Deleted -Action $action
Register-ObjectEvent $watcher -EventName Renamed -Action $action

# Keep the script running
while ($true) { Start-Sleep 1 }