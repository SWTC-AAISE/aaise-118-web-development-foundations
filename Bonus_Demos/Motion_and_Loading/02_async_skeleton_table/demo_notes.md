# Demo Notes: Async Skeleton Table

**Lecture placement:** After loading-state architecture, debounce timing, and skeleton anatomy  
**Estimated time:** 18-25 minutes  
**Data source:** Local array with deterministic simulated delays

## Purpose

Demonstrate that skeleton loading is one state inside a larger async workflow.
The demo separates debounce waiting from request loading, delays placeholders to
avoid flicker, preserves layout, supports reduced motion, and always terminates
in success, empty, or error.

## State Model

```text
Idle
→ Waiting for typing to pause
→ Request loading
→ Skeleton only after threshold
→ Success, empty, or error
```

## Recorded Build Sequence

1. Run immediate local filtering and verify the table baseline.
2. Add a 500 ms debounce while preserving current results.
3. Add the request-loading state and `aria-busy="true"`.
4. Add a separate 300 ms skeleton threshold.
5. Build five skeleton rows matching the final column structure and row height.
6. Simulate fast and slow responses.
7. Add empty and error terminal states.
8. Add the request-version token that ignores stale responses.
9. Hide decorative skeleton rows from assistive technology.
10. Disable shimmer under reduced motion.
11. Test every timing, terminal, keyboard, and responsive path.

## Code To Explain

```js
debounceTimer = setTimeout(() => {
  startRequest(query, version);
}, DEBOUNCE_DELAY);
```

- The application has not started loading during the debounce delay.
- Existing results remain visible while rapid input settles.

```js
skeletonTimer = setTimeout(() => {
  renderSkeletonRows();
}, SKELETON_THRESHOLD);
```

- Fast responses finish before the threshold and avoid placeholder flicker.
- Slow responses receive structural loading feedback.

```js
if (version !== requestVersion) {
  return;
}
```

- An older response cannot replace results for a newer query.

## Tests To Perform

- Use the fast response and confirm no skeleton appears.
- Use the slow response and confirm the skeleton appears after the threshold.
- Type rapidly and confirm old debounce timers do not start requests.
- Search `css`, `javascript`, and `no-match`.
- Select the error scenario and verify recovery instructions.
- Change the query before a slow response completes.
- Confirm `aria-busy` is false during debounce and after every terminal state.
- Confirm decorative skeleton rows are `aria-hidden`.
- Enable reduced motion and confirm placeholders remain while shimmer stops.
- Resize to a narrow viewport and use the table's horizontal scrolling region.

## Misconceptions To Address

- Debouncing is not loading.
- A skeleton is not required for every request.
- Shimmer is optional; structural placeholders carry the main meaning.
- Skeleton rows should not contain invented readable data.
- A loading state that never reaches empty or error is incomplete.
- `aria-busy` does not replace a concise human-readable status message.

## Transition Back To Lecture

```text
CSS owns the shimmer, but application state decides whether a skeleton belongs on screen.
The Web Animations API moves more direct timing control into JavaScript.
```

## Optional Time Compression

Begin from the completed render functions. Manually add the debounce, loading
threshold, request-version guard, and reduced-motion rule.
