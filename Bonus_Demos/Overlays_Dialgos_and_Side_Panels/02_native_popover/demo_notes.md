# Demo Notes: Native Popover

**Lecture placement:** After modal interruption and before side panels  
**Estimated time:** 5-8 minutes  
**Starting state:** Task status with a short explanation that should remain optional

## Purpose

Show a lightweight contextual disclosure that does not block the rest of the
page and requires no custom JavaScript for its basic open and close behavior.

## Recorded Build Sequence

1. Identify the status term that may need explanation.
2. Add the popover content with the `popover` attribute.
3. Add a button with `popovertarget="statusHelp"`.
4. Open the popover from the keyboard.
5. Dismiss it with Escape and by activating outside the popover.
6. Continue interacting with the surrounding page.
7. Inspect the intentionally empty JavaScript file.

## Tests To Perform

- Open from the trigger.
- Confirm the explanation is readable.
- Dismiss with Escape.
- Reopen and use light dismiss.
- Resize to a narrow viewport.
- Confirm the explanation is supplementary rather than essential.

## Misconceptions To Address

- A popover is not a modal dialog.
- A tooltip-like appearance does not make content accessible by hover alone.
- Essential instructions should remain visible in the page.
- Native behavior can reduce custom JavaScript without removing developer responsibility.

## Transition Back To Lecture

```text
The popover handled a small nearby explanation.
Larger supporting tools and navigation often need a panel with more room.
```

## Optional Extension

Add a second contextual explanation and verify that automatic popover behavior
does not leave both open unnecessarily.

