# yosi__bros Desktop App

This is the desktop-app version of the yosi__bros inventory.

## Requirements

Install Node.js first, then run:

```bash
npm install
```

## Test the app

```bash
npm start
```

## Build Windows installer

On Windows:

```bash
npm run build:win
```

The installer will appear in `dist/`.

## Build macOS app

On macOS:

```bash
npm run build:mac
```

The DMG will appear in `dist/`.

Build native installers on their respective operating systems for the most reliable result.

## GitHub

Push this whole folder to a GitHub repository. A friend can clone it and run `npm install` followed by `npm start`, or build an installer.

## Data

The current app stores inventory in browser localStorage inside the Electron app. Each computer has its own inventory.

## Future shared inventory

To make you and your friend use one shared stock database, add a backend/database in a later version.
