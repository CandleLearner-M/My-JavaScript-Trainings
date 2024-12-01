@echo off
git add .
git commit -m "Auto-commit: %date% %time%"
git push origin main  REM Replace 'main' with your branch name
