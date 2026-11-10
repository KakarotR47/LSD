@echo off
title SA Brothers Vendors POS - Windows Desktop Launcher
color 0A
cls

echo ====================================================================
echo           SA BROTHERS VENDORS - POINT OF SALE DESKTOP
echo             Court Stamp Vendors & Legal Paper Specialist
echo ====================================================================
echo.
cd /d "%~dp0\..\.."

:: 1. Check if SA_Brothers_Vendors_POS.exe exists in root
if exist "SA_Brothers_Vendors_POS.exe" (
    echo [OK] Found native Windows desktop application!
    echo [INFO] Launching SA Brothers Vendors POS in standalone window...
    start "" "SA_Brothers_Vendors_POS.exe"
    exit /b 0
)

if exist "public\download\SA_Brothers_Vendors_POS.exe" (
    echo [OK] Found native Windows desktop application!
    echo [INFO] Launching SA Brothers Vendors POS in standalone window...
    start "" "public\download\SA_Brothers_Vendors_POS.exe"
    exit /b 0
)

:: 2. Check if server is running on port 3000
netstat -ano | findstr :3000 >nul
if %ERRORLEVEL% EQU 0 (
    echo [OK] Shop POS Server is active on port 3000.
    where msedge >nul 2>nul
    if %ERRORLEVEL% EQU 0 (
        start msedge --app="http://localhost:3000" --window-size=1400,900
        exit /b 0
    )
    where chrome >nul 2>nul
    if %ERRORLEVEL% EQU 0 (
        start chrome --app="http://localhost:3000" --window-size=1400,900
        exit /b 0
    )
    start http://localhost:3000
    exit /b 0
)

echo.
echo ====================================================================
echo  [ACTION] Please run SA_Brothers_Vendors_POS.exe directly!
echo ====================================================================
echo  SA_Brothers_Vendors_POS.exe runs completely standalone without
echo  needing any command prompts or browser tabs.
echo.
pause
exit /b 1

:DONE
echo.
echo ====================================================================
echo [SUCCESS] POS software is running in standalone Windows Desktop mode!
echo ====================================================================
timeout /t 3 /nobreak >nul
exit
