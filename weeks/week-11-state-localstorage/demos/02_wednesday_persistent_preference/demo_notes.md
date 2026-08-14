# Demo Notes - Wednesday Persistent Preference

**Related Assignment:** Assignment 11 - State Management  
**Lecture Use:** Wednesday recorded lecture  
**Estimated Time:** 15-20 minutes

## Purpose

Deepen Monday's counter-state demo by showing that state is not automatically persistent. The selected theme is current state first, then saved state only after writing to `localStorage`.

## Delivery Mode

Start by changing theme state without emphasizing storage. Then add `localStorage.setItem()` and `localStorage.getItem()` so persistence appears as an intentional extra step.

## Walkthrough

1. Recall the Monday counter demo and how refresh reset the count.
2. Choose a theme and observe the page change.
3. Refresh the page and show that the selected theme remains.
4. Inspect Application/Storage in DevTools if available.
5. Explain `setItem`, `getItem`, and the fallback value.

## Misconceptions To Watch

- Students may think variables automatically survive refresh.
- Students may think localStorage is secure or private.
- Students may confuse UI state with stored state.

## Lab Bridge

Students should identify what their app needs to remember and decide whether it should be temporary state or saved browser state.

## Optional Extension

Clear localStorage in DevTools and refresh to show the fallback value.
