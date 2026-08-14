# Demo Notes - Monday Repeated Work

**Related Assignment:** Assignment 12 - Performance & Efficiency  
**Lecture Use:** Monday live lecture  
**Estimated Time:** 10-15 minutes

## Purpose

Make repeated work visible before introducing debounce or other performance refinements.

## Delivery Mode

Build the filter live and type into the search box slowly, then quickly. Let students see the run count increase with each input event.

## Concept Shown

- working code can still do unnecessary work
- input events can fire many times
- performance begins with observing repeated behavior
- optimization should have a reason

## Walkthrough

1. Render the full resource list.
2. Add the input event listener.
3. Type slowly and observe the run count.
4. Type quickly and observe repeated filtering.
5. Ask what could be improved without changing the feature.

## Wednesday Bridge

The Wednesday demo keeps the same feature but adds a small debounce so filtering waits until typing pauses.

