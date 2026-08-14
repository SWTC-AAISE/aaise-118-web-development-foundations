# Demo Notes - Monday Delayed Message

**Related Assignment:** Assignment 8 - Asynchronous Behavior  
**Lecture Use:** Monday live lecture  
**Estimated Time:** 10-15 minutes

## Purpose

Make asynchronous behavior visible with the smallest useful example: a button starts a delay, and the page updates later.

## Delivery Mode

Build the JavaScript live. Type the immediate status update first, then add `setTimeout()` so students can see "now" and "later" as separate moments.

## Concept Shown

- code can schedule work for later
- the page can show a waiting state
- the delayed callback runs after the timer finishes
- waiting still happens even when the code is short

## Walkthrough

1. Open the page before the timer logic is complete.
2. Type the button and status selectors.
3. Type the immediate `Waiting...` update.
4. Add `setTimeout()` and the delayed completion message.
5. Click the button and narrate what happens now versus later.

## Misconceptions To Watch

- Students may expect the delayed line to run immediately.
- Students may think the browser freezes while waiting.
- Students may miss that the callback is a function passed to `setTimeout()`.

## Wednesday Bridge

The Wednesday demo expands from a timer to request-shaped behavior with `fetch`, JSON, and `await`.

