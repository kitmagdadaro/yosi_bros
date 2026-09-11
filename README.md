# yosi__bros

A tiny local inventory tracker owned by Redge and Kikz

## Run it

No installation is required.

1. Download/clone this repository.
   - Click the green Code button.
   - Select Download ZIP.
   - Wait for the download to finish.
   - Find the downloaded ZIP file on your computer, usually in your Downloads folder.
2. Open `index.html` in a browser.
3. Add products and manage quantities.

## Data

Inventory data is stored in the browser's `localStorage`, so each computer/browser has its own copy.

## The project can create an installable application for:

🪟 Windows: yosi__bros-Setup-1.0.0.exe
🍎 macOS: yosi__bros-1.0.0.dmg

Note: Creating the Windows and Mac installer files requires a computer with the necessary development tools installed.

On the computer where you want to create the installer:
Open the project folder.
Open Terminal (Mac) or Command Prompt/PowerShell (Windows).
Navigate to the project folder.
Run:
npm install

This installs everything the project needs.

To test the application, run:
npm start
To create the Windows installer, run:
npm run build:win
To create the Mac installer, run:
npm run build:mac

The finished installer will be created in the project's dist folder.
