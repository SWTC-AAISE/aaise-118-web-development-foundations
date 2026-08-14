# Demo Notes - Wednesday Debounced Filter

**Related Assignment:** Assignment 12 - Performance & Efficiency  
**Lecture Use:** Wednesday recorded lecture  
**Estimated Time:** 12-18 minutes

## Purpose

Deepen Monday's repeated-work demo by adding a beginner-friendly debounce pattern. The goal is recognition, not mastery.

## Delivery Mode

Start from the Monday repeated-work version. Add `clearTimeout()` and `setTimeout()` live so the improvement is visible as a revision, not a mysterious finished pattern.

## Walkthrough

1. Recall the Monday version where filtering ran on every input event.
2. Type slowly and observe the result count.
3. Type quickly and explain that the timer waits until typing pauses.
4. Add or inspect the `clearTimeout`/`setTimeout` wrapper.
5. Compare how often filtering runs.
6. Connect repeated work to user experience and browser work.

## Misconceptions To Watch

- Students may think performance only means a page is visibly slow.
- Students may use debounce everywhere without a reason.
- Students may miss that small examples represent larger scaling problems.

## Lab Bridge

Students should identify one practical inefficiency in their project and make a small, explainable improvement.

## Optional Extension

Discuss pagination or showing fewer items as a design choice when a list becomes large.
