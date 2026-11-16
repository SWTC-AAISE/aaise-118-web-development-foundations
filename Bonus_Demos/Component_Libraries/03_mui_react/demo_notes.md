# Demo Notes: MUI As An Installed React Library

**Lecture placement:** After the Bootstrap ownership comparison and JavaScript-as-a-Gateway recall  
**Estimated time:** 12-16 minutes  
**Presentation mode:** Run and inspect a completed application; do not live-install React  
**Primary comparison:** Installed package ownership

## Purpose

Show what changes when a project adopts a component library tied to a framework
ecosystem. The interface deliberately repeats the Study Sprint behavior and
visual quality from the Bootstrap demonstrations so students can examine the
programming model, dependencies, and ownership rather than choosing based on
appearance.

## Prerequisite Boundary

This is not a React lesson or a new assignment expectation. Before opening the
code, cross-reference `Bonus-JS_as_a_Gateway` and state explicitly:

- JavaScript remains the programming language.
- React adds a component and rendering model.
- JSX is source syntax processed by the project toolchain.
- MUI requires React and ReactDOM; it is not a stylesheet for plain HTML pages.
- Existing JavaScript knowledge transfers, but React still requires deliberate learning.

## Suggested Recording Sequence

1. Run `npm ci` only if dependencies are not already installed.
2. Run `npm run dev` and test the finished planner.
3. Compare its purpose and behavior with the Bootstrap version.
4. Open `package.json` and identify React, MUI, Emotion, and Vite.
5. Open `src/main.jsx` and identify the React root.
6. Open `src/App.jsx` and locate imported MUI components.
7. Trace `useState`, controlled fields, form submission, and conditional feedback.
8. Open `src/theme.js` and identify project decisions layered over MUI.
9. Show that there is no static planner form in `index.html`; React renders it.
10. Return to the browser and repeat valid, invalid, keyboard, and narrow-width tests.

## Suggested Code Examples

### Component imports

```jsx
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
```

MUI remains installed in `node_modules`. The project imports and configures its
public component APIs.

### React-owned state

```jsx
const [focus, setFocus] = useState("");
const [minutes, setMinutes] = useState("");
const [feedback, setFeedback] = useState({
  severity: "info",
  message: "Your recommended plan will appear here.",
});
```

Contrast this with querying elements and changing `textContent` directly. React
state describes the current interface data; rendering updates the displayed UI.

### Library component usage

```jsx
<TextField label="Minutes available" type="number" />
<Button type="submit" variant="contained">Create study plan</Button>
<Alert severity={feedback.severity}>{feedback.message}</Alert>
```

The concise application code sits on top of React, MUI, Emotion, Vite, package
management, and the library's component APIs.

## Tests To Perform

- Submit blank and out-of-range values.
- Submit 15, 35, and 60 minutes.
- Navigate through fields and the button without a mouse.
- Confirm labels, status feedback, and visible focus.
- Resize across the one-column and two-column layouts.
- Run `npm run build` and confirm the production build succeeds.

## Limitations And Guardrails

- Do not present MUI as an easy next-day replacement for native JavaScript.
- Do not teach React installation, hooks, JSX, and MUI theming in depth here.
- MUI provides accessibility-oriented components, not an accessibility guarantee.
- `sx` and theme configuration create library-specific coupling.
- A dependency upgrade can change APIs, rendering, styling, or build requirements.
- The polished result should not be used as evidence that React is automatically superior.

## Instructor Framing

```text
MUI supplied installed React components and a theming system.
The project still owns its purpose, state decisions, content, tests, and dependency maintenance.
```

## Optional Student Exploration

Students interested in React may change one theme token, inspect one additional
MUI component, or rewrite one display section. This is exploration, not required
course work, and should not expand the capstone requirements.
