# Demo Notes - Monday Counter State

**Related Assignment:** Assignment 11 - State Management  
**Lecture Use:** Monday live lecture  
**Estimated Time:** 10-15 minutes

## Purpose

Show state as a value the application remembers while the page is running.

## Delivery Mode

Build the state variable and render function live. Refresh the page after several clicks so students see that ordinary variable state does not persist.

## Concept Shown

- state is a current value the app tracks
- user actions can update state
- the UI must be rendered from state
- state in a variable is lost on refresh

## Walkthrough

1. Type `let completedSessions = 0`.
2. Type `renderCount()`.
3. Add the session and reset functions.
4. Click buttons and watch state and UI stay in sync.
5. Refresh the page and point out that the count resets.

## Misconceptions To Watch

- Students may think the paragraph is the state.
- Students may update the UI without updating the variable.
- Students may expect variable state to survive refresh.

## Wednesday Bridge

The Wednesday demo adds persistence with `localStorage`, showing that persistence must be handled intentionally.

