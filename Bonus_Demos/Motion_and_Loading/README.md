# Planned Demonstrations

The demonstrations form one moderated progression:

```text
01_purposeful_feedback_transition/
02_async_skeleton_table/
03_web_animations_api_comparison/
```

Each demonstration will contain:

```text
index.html
styles.css
script.js
demo_notes.md
```

## Demo Roles

### Demo 1 - Purposeful Feedback Transition

Introduces CSS transitions, one restrained keyframe sequence, JavaScript-owned
state classes, and reduced-motion behavior through a Study Sprint form.

### Demo 2 - Async Skeleton Table

Integrates debounced input, simulated async delay, a delayed loading threshold,
stable skeleton rows, success, empty, and error states, `aria-busy`, status
announcements, and reduced-motion behavior.

### Demo 3 - Web Animations API Comparison

Recreates Demo 1's feedback motion through `Element.animate()` so students can
compare CSS-owned motion with JavaScript-owned timing and playback control.

## Continuity Rules

- Every demo begins from a working interface.
- Motion never delays access to essential content.
- Reduced motion preserves meaning and state feedback.
- Demo 2 uses simulated local data so recording behavior remains reproducible.
- Demo 3 is inspected as a completed example rather than live-built from zero.
- Third-party animation libraries do not receive runnable demos in this lecture.

## Current Status

- Demo 1 code and instructor notes: complete
- Demo 2 code and instructor notes: complete
- Demo 3 code and instructor notes: complete
- Chromium interaction, reduced-motion, and responsive validation: complete
