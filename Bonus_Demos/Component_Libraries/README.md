# Component-Library Demonstrations

This folder contains the runnable demonstrations for the component-library
bonus lecture.

Demonstration sequence:

```text
01_manual_to_bootstrap/
02_bootstrap_customization/
03_mui_react/
04_shadcn_open_code/
```

The direct-browser demonstrations contain:

```text
index.html
styles.css
script.js
demo_notes.md
```

Demo 2 will continue from Demo 1 so the recorded lecture demonstrates iterative
development rather than two unrelated examples.

The React demonstrations are complete Vite applications with their own
`package.json`, source folder, and instructor notes. They should be run and
inspected as completed examples rather than built live from installation.

Student setup instructions are included inside each React demo:

- `03_mui_react/README.md`
- `04_shadcn_open_code/README.md`

## Current Status

- Demo 1: generated with selective Bootstrap adoption, a polished utility-driven palette, and instructor notes
- Demo 2: generated as a direct customization iteration with instructor notes
- Demo 3: generated as a completed MUI/React installed-library example
- Demo 4: generated as a completed shadcn/ui open-code example
- Planner behavior: intentionally equivalent across all four finished versions
- Production builds, desktop rendering, phone-width overflow, and interaction paths: validated

The two finished versions should retain comparable visual quality. Demo 1 must
not be made intentionally plain to exaggerate the effect of custom CSS; the
lecture compares implementation ownership and tradeoffs, not unequal design
effort.

MUI and shadcn/ui are runnable, guided code-reading demonstrations. They are not
React installation tutorials or new course requirements. Tailwind is visible
inside the shadcn/ui example. Base UI is named only as an underlying primitive;
headless architecture remains deferred.

## Run The React Examples

From either `03_mui_react` or `04_shadcn_open_code`:

```powershell
npm ci
npm run dev
```

Use `npm run build` to verify the production bundle. Generated `node_modules`
and `dist` folders are excluded by this demo folder's `.gitignore`; the lock
files preserve the verified dependency resolutions.

