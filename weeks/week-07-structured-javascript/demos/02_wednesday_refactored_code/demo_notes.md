# Demo Notes - Wednesday Refactored Code

**Related Assignment:** Assignment 7 - Structured JavaScript  
**Lecture Use:** Wednesday recorded lecture  
**Estimated Time:** 15-20 minutes

## Purpose

Deepen Monday's working-but-messy example by refactoring it into clearer functions.

## Delivery Mode

Start from the Monday version. Type the function extraction live: one function for reading input, one for deciding the plan, one for updating the page. The finished file is the reference state.

## Concept Shown

- functions can separate responsibilities
- named functions make code easier to read
- refactoring should preserve behavior
- code is written for humans first, computers second

## Walkthrough

1. Run the Monday version and record the expected behavior.
2. Extract `getMinutesAvailable()`.
3. Extract `chooseStudyPlan(minutes)`.
4. Extract `showPlan()`.
5. Reconnect the event listener to `showPlan`.
6. Test the same values again to verify behavior stayed the same.

## Misconceptions To Watch

- Students may think every line needs its own function.
- Students may change behavior while trying to refactor.
- Students may name functions vaguely, such as `doStuff()`.

## Lab Bridge

Students should refactor their own JavaScript so related logic is grouped into functions with clear names and responsibilities.

