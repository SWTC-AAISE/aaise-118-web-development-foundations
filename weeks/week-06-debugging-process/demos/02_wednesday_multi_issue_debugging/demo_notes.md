# Demo Notes - Wednesday Multi-Issue Debugging

**Related Assignment:** Assignment 6 - Debugging & Problem Solving  
**Lecture Use:** Wednesday recorded lecture  
**Estimated Time:** 15-20 minutes

## Purpose

Deepen Monday's single selector bug into a small debugging sequence with multiple issues. Students should see debugging as observation, isolation, fix, and verification.

## Delivery Mode

Start from the broken version. Do not reveal `fixed_script.js` first. Use it as the reference state after working through the issues.

## Known Issues

- JavaScript selects `#addTaskButton`, but the HTML id is `addButton`.
- The empty-input condition uses assignment `=` instead of comparison `===`.
- The CSS has `.status`, but the HTML uses `id="status"`. This is a styling issue, not the cause of the JavaScript failure.

## Walkthrough

1. Open the page and click the button.
2. Read the console error and inspect the selector.
3. Fix the button selector and test again.
4. Notice the validation behavior is still wrong.
5. Inspect the condition and fix `=` to `===`.
6. Check the style mismatch only after the interaction works.
7. Compare to `fixed_script.js`.

## Misconceptions To Watch

- Students may try to fix every file at once.
- Students may chase the CSS issue before the JavaScript error.
- Students may not retest after each fix.

## Lab Bridge

Students should document what they observed, how they identified the cause, what they changed, and how they verified the fix.

