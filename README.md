# yosi__bros

A tiny local inventory tracker owned by Redge and Kikz.

## Run It

No installation is required.

1. **Download/clone this repository.**

   * Click the green **Code** button.
   * Select **Download ZIP**.
   * Wait for the download to finish.
   * Find the downloaded ZIP file on your computer, usually in your **Downloads** folder.
   * Extract the ZIP file and open the project folder.

2. **Open `index.html` in a browser.**

3. **Add products and manage quantities.**

## Data

Inventory data is stored in the browser's `localStorage`, so each computer/browser has its own copy.

## Desktop Application

The project can create an installable application for:

* 🪟 **Windows:** `yosi__bros-Setup-1.0.0.exe`
* 🍎 **macOS:** `yosi__bros-1.0.0.dmg`

> **Note:** Creating the Windows and macOS installer files requires a computer with the necessary development tools installed.

### Building the Application

On the computer where you want to create the installer:

1. Open the project folder.

2. Open **Terminal** on Mac or **Command Prompt/PowerShell** on Windows.

3. Navigate to the project folder.

4. Install the project dependencies:

   ```bash
   npm install
   ```

   This installs everything the project needs.

5. To test the application, run:

   ```bash
   npm start
   ```

6. To create the Windows installer, run:

   ```bash
   npm run build:win
   ```

7. To create the macOS installer, run:

   ```bash
   npm run build:mac
   ```

The finished installer will be created in the project's `dist` folder.
