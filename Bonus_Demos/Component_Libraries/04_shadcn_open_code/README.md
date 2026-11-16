# Study Sprint shadcn/ui Open-Code Demo

This completed example shows the Study Sprint planner using React, Tailwind CSS,
and project-owned UI component source following the shadcn/ui model. It is
provided for optional exploration after the component-libraries lecture.

You do not need to create a new React project, run `shadcn init`, or add the
components again. The configuration and component source are already included.
The installation command downloads the packages required by this cloned demo.

## Prerequisites

Install these tools before running the demo:

- Git
- Node.js `20.19` or newer, or Node.js `22.12` or newer
- npm, which is included with Node.js
- a code editor such as Visual Studio Code
- an internet connection for the initial dependency download

Confirm the tools from PowerShell or a terminal:

```powershell
git --version
node --version
npm --version
```

## 1. Clone The Course Repository

Skip this step if the repository is already on your computer.

```powershell
git clone https://github.com/cashmy/10-152-118_Web_Development_Foundations.git
cd 10-152-118_Web_Development_Foundations
```

If you cloned the repository earlier, retrieve the newest course files before
continuing:

```powershell
git pull
```

## 2. Enter The Demo Folder

From the repository root:

```powershell
cd Bonus-Component_Libraries_And_Framework_Tradeoffs/Demos/04_shadcn_open_code
```

## 3. Install The Locked Dependencies

```powershell
npm ci
```

`npm ci` reads `package-lock.json` and recreates the dependency versions used to
verify this demonstration. The generated `node_modules` folder is intentionally
excluded from Git.

## 4. Start The Development Server

```powershell
npm run dev
```

Vite prints a local address, normally:

```text
http://localhost:5173/
```

Open the displayed address in a browser. Keep the terminal running while using
the demo.

## 5. Stop The Server

Return to the terminal and press `Ctrl+C`. Confirm termination if the terminal
asks.

## Optional Production Check

```powershell
npm run build
```

This creates a local `dist` folder and verifies that the application can be
compiled for production. The `dist` folder is also excluded from Git.

## Suggested Exploration

After running the planner:

1. Open `src/App.jsx` and find the imports from `components/ui`.
2. Open `src/components/ui/button.jsx`.
3. Change one Tailwind color class in the local button component.
4. Save the file and watch the browser update.
5. Restore the original class or use Git to discard your experimental change.

The component files are local source code, but the project still uses React,
Tailwind, Base UI, Vite, and other installed dependencies. This is optional
exploration and is not a capstone requirement.

## Troubleshooting

### Node version error

Run `node --version`. Update Node.js when the version is below the prerequisite
listed above, then close and reopen the terminal.

### PowerShell blocks `npm.ps1`

Use the Windows command shim without changing the computer's execution policy:

```powershell
npm.cmd ci
npm.cmd run dev
```

### The default port is already being used

Vite may automatically select another port. Use the address Vite prints, or
select a port explicitly:

```powershell
npm run dev -- --port 5180
```

### Dependency installation became incomplete

Make sure the terminal is in this demo folder, remove only its generated
dependency folder, and reinstall:

```powershell
Remove-Item -LiteralPath node_modules -Recurse -Force
npm ci
```

Do not delete `package.json`, `package-lock.json`, `components.json`, or the
`src/components/ui` folder.
