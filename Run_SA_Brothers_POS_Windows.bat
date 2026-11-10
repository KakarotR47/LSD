@echo off
title SA Brothers Vendors POS - Windows Launcher
color 0B
cls

echo ====================================================================
echo           SA BROTHERS VENDORS - POINT OF SALE (WINDOWS)
echo ====================================================================
echo.

cd /d "%~dp0"

:: 1. If native Windows desktop app exists in current folder, run it directly!
if exist "SA_Brothers_Vendors_POS.exe" (
    echo [OK] Found SA_Brothers_Vendors_POS.exe!
    echo [INFO] Launching native Windows POS application in standalone window...
    start "" "SA_Brothers_Vendors_POS.exe"
    exit /b 0
)

if exist "release\SA_Brothers_Vendors_POS-win32-x64\SA_Brothers_Vendors_POS.exe" (
    echo [OK] Found release\SA_Brothers_Vendors_POS-win32-x64\SA_Brothers_Vendors_POS.exe!
    echo [INFO] Opening SA Brothers Vendors POS window...
    start "" "release\SA_Brothers_Vendors_POS-win32-x64\SA_Brothers_Vendors_POS.exe"
    exit /b 0
)

if exist "dist\SA_Brothers_Vendors_POS.exe" (
    echo [OK] Found dist\SA_Brothers_Vendors_POS.exe!
    echo [INFO] Launching native Windows POS application...
    start "" "dist\SA_Brothers_Vendors_POS.exe"
    exit /b 0
)

if exist "SA_Brothers_Vendors_POS_Setup.exe" (
    echo [OK] Found SA_Brothers_Vendors_POS_Setup.exe!
    echo [INFO] Launching native Windows POS application...
    start "" "SA_Brothers_Vendors_POS_Setup.exe"
    exit /b 0
)

:: 2. Check if developer environment is present
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ====================================================================
    echo  [ACTION] Please double-click SA_Brothers_Vendors_POS.exe directly!
    echo ====================================================================
    echo  SA_Brothers_Vendors_POS.exe is the standalone Windows application.
    echo  Double-clicking it runs the app immediately without web browsers.
    echo.
    pause
    exit /b 1
)

echo [INFO] Starting POS server...
start /b cmd /c "npm run dev"
timeout /t 3 /nobreak >nul

where msedge >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    start msedge --app="http://localhost:3000"
    exit /b 0
)

where chrome >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    start chrome --app="http://localhost:3000"
    exit /b 0
)

start "" "http://localhost:3000"
exit /b 0
