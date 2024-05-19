@echo off

cd /d "%~dp0"

git add .

git commit -m "Update from push_to_github.bat"

git push -u origin main
