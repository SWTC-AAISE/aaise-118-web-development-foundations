# Demo Notes: Restore Project Identity

**Lecture placement:** Immediately after Demo 1 and library-default discussion  
**Estimated time:** 10-14 minutes  
**Locked version:** Bootstrap 5.3.8  
**Starting state:** Completed Demo 1 with a polished Bootstrap utility palette

## Purpose

Demonstrate that a polished component-library result can still benefit from
project-specific identity. Keep the HTML structure, Bootstrap layout and form
classes, and JavaScript behavior from Demo 1. Replace selected contextual color
utilities with a small local stylesheet loaded after Bootstrap.

## Continuity With Demo 1

The form fields, validation rules, recommendation branches, live status region,
and core Bootstrap layout and control classes remain intact. Contextual color
utilities may be replaced where local CSS takes ownership. This is an iteration
of the same interface, not a second unrelated solution.

## Recorded Build Sequence

1. Open the completed Demo 1 result and acknowledge that it is already polished.
2. Separate visual quality from project-specific identity.
3. Confirm that `styles.css` loads after the Bootstrap stylesheet.
4. Add Study Sprint color variables under `:root`.
5. Style the header and add the gold boundary as a clear identity signal.
6. Refine the planner and ownership panels without removing Bootstrap layout classes.
7. Override Bootstrap button variables instead of rebuilding the button from zero.
8. Add project-specific success and warning treatments.
9. Add an obvious keyboard focus outline for inputs and buttons.
10. Add the narrow-screen spacing and full-width action rule.
11. Repeat the same behavior, keyboard, and responsive tests from Demo 1.

## Code To Explain

```css
.btn-primary {
  --bs-btn-bg: var(--sprint-teal);
  --bs-btn-border-color: var(--sprint-teal);
  --bs-btn-hover-bg: var(--sprint-teal-dark);
  --bs-btn-hover-border-color: var(--sprint-teal-dark);
}
```

- Bootstrap still owns the component's broader button rules.
- Local custom properties replace selected design decisions.
- This is less code than rebuilding every button state manually, but it creates
  an upgrade and compatibility responsibility.

```css
.form-control:focus,
.btn:focus-visible {
  outline: 0.2rem solid var(--sprint-gold);
  outline-offset: 0.18rem;
  box-shadow: none;
}
```

- Project identity includes interaction states, not only static colors.
- Removing a library's focus treatment requires supplying a visible replacement.

## Tests To Perform

- Compare Demo 1 and Demo 2 side by side at the same viewport width.
- Confirm that both versions appear intentional before discussing tradeoffs.
- Submit invalid input and verify the warning treatment and announcement.
- Submit valid input and verify all three recommendation branches.
- Navigate without a mouse and inspect every focus state.
- Resize through Bootstrap's responsive column change.
- Test below 576 pixels and confirm the action becomes full width.
- Temporarily move `styles.css` above Bootstrap and observe cascade order.

## Misconceptions To Address

- Customization is not automatically an improvement; each change needs a reason.
- Generic does not mean unusable, and project-specific does not automatically
  mean better.
- Loading local CSS after a library is a deliberate cascade decision.
- A new color palette does not replace usability or accessibility testing.
- Library variables reduce work but also connect local code to the library's API.
- Deep overrides can become expensive when a dependency is upgraded.

## Transition Back To Lecture

```text
The library accelerated the shared interface work.
The project still owned its purpose, identity, behavior, accessibility, and maintenance.
```

## Optional Time Compression

Paste the `:root` variables and mobile media query. Manually type the button
variable overrides and focus rules because those two blocks make the ownership
and accessibility tradeoffs most visible.
