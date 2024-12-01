# Set the path to your project directory
$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = "D:\Training\training"
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true

# Define the action to take when a change is detected
$action = {
    git add .
    git commit -m "Automated commit"
    git push
}

# Register the event handlers
Register-ObjectEvent $watcher Changed -Action $action
Register-ObjectEvent $watcher Created -Action $action
Register-ObjectEvent $watcher Deleted -Action $action
Register-ObjectEvent $watcher Renamed -Action $action

# Keep the script running
while ($true) { Start-Sleep 1 }