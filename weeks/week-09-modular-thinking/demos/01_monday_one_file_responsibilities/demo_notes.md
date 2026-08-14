# Demo Notes - Monday One File Responsibilities

**Related Assignment:** Assignment 9 - Modular Thinking  
**Lecture Use:** Monday live lecture  
**Estimated Time:** 12-18 minutes

## Purpose

Show modularity before modules. Students should see that code can be organized by responsibility even when it still lives in one JavaScript file.

## Delivery Mode

Start from a working event handler and extract named functions live. The finished file is the reference state.

## Concept Shown

- modularity means separating responsibilities
- modules are one possible file-based way to organize modular code
- event handling, data reading, decision logic, and display logic can be separated
- clear function names reduce cognitive load

## Walkthrough

1. Identify the four responsibilities: read input, decide, display, respond to event.
2. Type or extract `readMinutes()`.
3. Type or extract `choosePlan(minutes)`.
4. Type or extract `updateResult(message)`.
5. Keep `handlePlanClick()` as the coordinator.
6. Test the same behavior after each extraction.

## Misconceptions To Watch

- Students may think modularity always means multiple files.
- Students may split code randomly rather than by responsibility.
- Students may change behavior while reorganizing.

## Wednesday Bridge

The Wednesday demo keeps the same responsibilities but separates them across multiple JavaScript files.

