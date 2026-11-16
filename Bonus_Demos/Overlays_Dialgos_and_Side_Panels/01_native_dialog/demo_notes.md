# Demo Notes: Native Dialog

**Lecture placement:** After the native-dialog concept sequence  
**Estimated time:** 10-14 minutes  
**Starting state:** Working project card with details available inline or prepared for relocation

## Purpose

Demonstrate that a native `<dialog>` supplies meaningful browser behavior rather
than merely placing a box above the page.

## Recorded Build Sequence

1. Show the project card and explain why details are secondary.
2. Add the `<dialog>` with a heading and explicit close button.
3. Select the dialog and buttons in JavaScript.
4. Connect the open button to `showModal()`.
5. Connect the close button to `close()`.
6. Add the `close` listener and restore focus to the trigger.
7. Add `::backdrop` styling.
8. Add the reduced-motion-aware entry treatment.

## Tests To Perform

- Activate the trigger with the mouse.
- Activate the trigger from the keyboard.
- Confirm focus enters the dialog.
- Close with the explicit button.
- Reopen and close with Escape.
- Confirm focus returns to the trigger.
- Resize to a narrow viewport and repeat.

## Misconceptions To Address

- A visually centered `<div>` is not automatically a modal dialog.
- `show()` and `showModal()` create different interaction models.
- A backdrop does not replace an explicit close control.
- The browser supplies behavior, but the developer still supplies useful content and testing.

## Transition Back To Lecture

```text
The dialog interrupted the page because the details temporarily required focused attention.
The next pattern provides context without blocking the page.
```

## Optional Extension

Add a confirmation and cancellation choice, then report the selected result after
the dialog closes.

