# Demo 3 - Web Animations API Comparison

## Purpose

This completed comparison revisits Demo 1's Study Sprint feedback. The visible
result and accessibility semantics stay familiar, but JavaScript now controls
the feedback motion through `Element.animate()`.

This is an awareness and comparison demo. Students are not expected to rebuild
it from memory or adopt the Web Animations API in Assignment 14.

## Suggested Recording Sequence

1. Open Demo 1 briefly and identify its division of responsibility.
2. Open this demo and submit a valid plan.
3. Point out that state classes still own meaning and color.
4. Inspect `playFeedbackMotion()` and the keyframe array.
5. Identify the returned `Animation` object.
6. Use **Replay** and **Cancel** to demonstrate playback control.
7. Emulate reduced motion and repeat the submission.
8. Close by comparing added control with added code and testing.

## Instructor Notes

- Keep the comparison anchored to a familiar interface. The API is the new
  concept; the application should not also become new.
- `Element.animate()` accepts keyframes and timing options directly in
  JavaScript.
- The returned `Animation` object provides controls such as `cancel()`,
  `pause()`, `play()`, and `reverse()`. This demo deliberately uses only two.
- Canceling an animation does not cancel the form result. Meaning and motion
  remain separate.
- Replay does not repeat validation or create a new plan. It only repeats the
  visual emphasis.
- The reduced-motion media query is checked before the API is called. The
  result remains visible and complete when animation is skipped.
- CSS transitions remain the recommended starting point for simple state
  changes. Use the API when playback control or generated timing has a clear
  purpose.

## Live Coding Recommendation

Treat this as a completed-code walkthrough rather than a full live build. A
focused recording can add these pieces to a working Demo 1 copy:

1. Add the Replay and Cancel buttons.
2. Add the `matchMedia()` reduced-motion check.
3. Add `playFeedbackMotion()`.
4. Store the returned animation.
5. Wire the two playback controls.

Do not spend recording time rebuilding the form or its responsive layout.

## Key Comparison

| Question | CSS transition/keyframe | Web Animations API |
| --- | --- | --- |
| Where is motion declared? | Stylesheet | JavaScript |
| Best fit | Predictable visual state changes | Playback control or generated motion |
| Can code cancel or replay it directly? | Indirectly through classes | Yes, through the Animation object |
| Beginner starting point | Recommended | Optional next step |
| Main cost | CSS state coordination | More code and a larger testing surface |

## Accessibility Checks

- Submit the form with only the keyboard.
- Confirm the status message remains understandable without movement.
- Confirm focus outlines remain visible.
- Emulate `prefers-reduced-motion: reduce` and verify that feedback updates
  immediately without animation.
- Confirm Replay and Cancel do not alter the announced status text.

## Discussion Questions

- What user problem would require replay, pause, reverse, or timeline control?
- When would CSS remain the simpler and more maintainable choice?
- Why should reduced motion be checked before starting the animation?
- What additional tests become necessary when JavaScript controls playback?

## Reset

Reload `index.html`. No server, network request, or build step is required.
