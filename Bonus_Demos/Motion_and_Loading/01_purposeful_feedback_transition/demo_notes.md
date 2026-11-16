# Demo Notes: Purposeful Feedback Transition

**Lecture placement:** After transition, keyframe, timing, and reduced-motion foundations  
**Estimated time:** 10-14 minutes  
**Starting state:** Working Study Sprint form with immediate feedback and no required motion

## Purpose

Demonstrate a small state change in which motion confirms that feedback has been
updated. The message remains visible, semantic, and understandable when motion
is unavailable or reduced.

## Recorded Build Sequence

1. Run valid and invalid submissions before adding motion.
2. Identify the semantic feedback region and existing state classes.
3. Add explicit transitions for `opacity`, `transform`, border, and background.
4. Add the temporary `is-preparing` class.
5. Let JavaScript change content and state classes.
6. Add one short, non-looping success-emphasis keyframe.
7. Add the reduced-motion media query.
8. Repeat valid, invalid, keyboard, narrow-screen, and reduced-motion tests.

## Code To Explain

```css
.feedback {
  transition:
    opacity 180ms ease-out,
    transform 180ms ease-out;
}

.feedback.is-preparing {
  opacity: 0;
  transform: translateY(6px);
}
```

- The properties are named explicitly rather than using `transition: all`.
- The movement is small and does not delay access to the message.

```js
feedback.classList.add(`is-${state}`);
feedback.classList.remove("is-preparing");
```

- JavaScript owns the application state.
- CSS owns how the visual transition occurs.

## Tests To Perform

- Submit empty input.
- Submit 15, 35, and 60 minutes.
- Submit repeatedly before the previous motion completes.
- Navigate and submit without a mouse.
- Test at a narrow viewport.
- Enable operating-system reduced motion and repeat every state.
- Confirm the status remains meaningful when animation is disabled.

## Misconceptions To Address

- Motion is not the feedback; the visible text is the feedback.
- A larger or longer effect is not automatically clearer.
- JavaScript does not need to contain every visual timing decision.
- Reduced motion should preserve state meaning, not hide the result.
- A single success animation should not loop continuously.

## Transition Back To Lecture

```text
This motion confirms one immediate state change.
Loading feedback requires a larger state model because waiting unfolds over time.
```

## Optional Time Compression

Paste the visual styling and manually type the transition, state class, and
reduced-motion blocks.
