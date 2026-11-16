# Demo Notes: Bootstrap Offcanvas

**Lecture placement:** After side-panel concepts and Bootstrap introduction  
**Estimated time:** 12-16 minutes  
**Locked version:** Bootstrap 5.3.8  
**Starting state:** Primary project-planning task with supporting details in the page

## Purpose

Demonstrate how a component library supplies a tested panel pattern while the
developer remains responsible for purpose, content, labels, placement, testing,
and project-specific styling.

## Recorded Build Sequence

1. Show the primary planning task and identify supporting project details.
2. Add the Bootstrap 5.3.8 CSS CDN link.
3. Add the Bootstrap offcanvas markup.
4. Add the trigger's `data-bs-toggle`, `data-bs-target`, and `aria-controls`.
5. Add the explicit close controls.
6. Add the Bootstrap JavaScript bundle.
7. Add a small project-specific stylesheet.
8. Listen for `shown.bs.offcanvas` and `hidden.bs.offcanvas`.

## Tests To Perform

- Open from the keyboard.
- Confirm focus enters the panel.
- Close with the header button.
- Reopen and close with Escape.
- Reopen and close from the backdrop.
- Use the second dismissal button.
- Resize to a phone width and repeat the task.
- Disable the network once to show the CDN dependency clearly.

## Misconceptions To Address

- Bootstrap does not choose whether an offcanvas panel is appropriate.
- Library classes do not replace semantic labels or useful content.
- Data attributes configure behavior rather than create business logic.
- A CDN dependency should be versioned and tested.
- A library component still needs project-specific responsive and accessibility checks.

## Transition Back To Lecture

```text
Bootstrap supplied the panel mechanics.
The developer still owned the user need, content, labels, tests, and visual fit.
```

## Optional Extension

Change the panel into a responsive offcanvas that remains visible as supporting
content above a selected Bootstrap breakpoint.

