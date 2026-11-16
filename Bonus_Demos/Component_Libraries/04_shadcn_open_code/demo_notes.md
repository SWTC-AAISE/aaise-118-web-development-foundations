# Demo Notes: shadcn/ui As Project-Owned Component Source

**Lecture placement:** After the MUI installed-library demonstration  
**Estimated time:** 12-16 minutes  
**Presentation mode:** Run and inspect a completed application; do not teach the CLI  
**Primary comparison:** Open-code ownership

## Purpose

Show a different component-library relationship. MUI component implementation
remains inside installed packages; shadcn/ui adds component source to the
project. Students can open, modify, and maintain that source directly.

The interface repeats the same Study Sprint behavior and comparable visual
quality used in the other demonstrations. This protects the ownership
comparison from becoming a beauty contest.

## Terminology Boundary

Do not call shadcn/ui a headless library. In this prepared example:

- shadcn/ui represents the open-code component model.
- component source lives under `src/components/ui`.
- Tailwind supplies utility-based styling.
- the local `Button` wraps a Base UI primitive.
- Base UI is only named as an unstyled behavior foundation; headless architecture is deferred.

The generated component source still has dependencies. “You own the code” does
not mean “the project has no external packages.”

## Suggested Recording Sequence

1. Run `npm ci` only if dependencies are not already installed.
2. Run `npm run dev` and test the completed planner.
3. Compare the result with the MUI and Bootstrap versions.
4. Open `package.json` and identify React, Base UI, Tailwind, and Vite.
5. Open `components.json` and explain that it records shadcn/ui project choices.
6. Open `src/App.jsx` and identify local imports from `components/ui`.
7. Open `src/components/ui/button.jsx` and show that the source is editable here.
8. Trace `buttonVariants`, `cn()`, and the Base UI primitive without teaching them in depth.
9. Open `input.jsx` and `alert.jsx` to show that different components can have different underlying complexity.
10. Repeat valid, invalid, keyboard, and narrow-width tests.

## Suggested Code Examples

### Local component imports

```jsx
import { Alert } from "./components/ui/alert.jsx";
import { Button } from "./components/ui/button.jsx";
import { Input } from "./components/ui/input.jsx";
```

The application imports source files owned by this project rather than importing
every visible component directly from one installed UI package.

### Editable component source

```jsx
function Button({ className, variant, ...props }) {
  return (
    <ButtonPrimitive
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    />
  );
}
```

The project can modify this abstraction, but it also becomes responsible for
understanding, testing, and maintaining those modifications.

### Application composition

```jsx
<Label htmlFor="minutes-input">Minutes available</Label>
<Input id="minutes-input" type="number" />
<Button type="submit">Create study plan</Button>
```

This resembles a component library API while the implementation remains visible
inside the repository.

## Tests To Perform

- Submit blank and out-of-range values.
- Submit 15, 35, and 60 minutes.
- Navigate through fields and the button without a mouse.
- Confirm the local focus treatment remains visible.
- Resize across the Tailwind `lg` layout breakpoint.
- Run `npm run build` and confirm the production build succeeds.
- Change one local button class, rebuild, and observe that the project owns the result.

## Limitations And Guardrails

- Do not present this as a shadcn/ui installation tutorial.
- Do not imply that copied source eliminates React or build-tool prerequisites.
- Do not teach Base UI or headless composition beyond brief recognition.
- Tailwind classes and variant helpers introduce their own learning requirements.
- Local ownership increases control and also increases maintenance responsibility.
- Registry components should be reviewed before adoption; source visibility is not automatic quality assurance.
- This small representative package is intentionally limited to the components needed by the demo.

## Instructor Framing

```text
shadcn/ui changes where component source lives and who can modify it.
Greater ownership provides control, but it also transfers more maintenance responsibility to the project.
```

## Optional Student Exploration

Students interested in this model may change one local variant, inspect the
official component documentation, or compare a Base UI and Radix implementation.
This remains optional and does not add a React or Tailwind requirement to the
course capstone.
