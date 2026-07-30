@echo off
title Muhamed Favas Portfolio Dev Server
echo ==============================================================
echo  Starting Muhamed Favas Portfolio Website on Windows...
echo ==============================================================
cd /d "%~dp0"
echo.
echo Running local development server...
echo Please open http://localhost:3000 in your browser.
echo.
npm run dev
pause
