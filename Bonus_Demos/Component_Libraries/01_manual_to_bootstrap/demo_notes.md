# Demo Notes: Manual Interface To Bootstrap

**Lecture placement:** After Bootstrap categories and version setup  
**Estimated time:** 12-16 minutes  
**Locked version:** Bootstrap 5.3.8  
**Ending state:** Selective Bootstrap adoption with the original JavaScript behavior preserved

## Purpose

Demonstrate that Bootstrap can accelerate an interface without replacing its
semantic structure, project purpose, validation decisions, or JavaScript
behavior. The instructor should build toward the finished files rather than
beginning by displaying the completed result.

The finished Bootstrap version must look intentionally designed. A visually
plain Bootstrap result compared with a polished custom result would measure
unequal design effort and could bias the tool comparison.

## Starting Baseline

Begin with the same page content and working `script.js`, but before adding the
Bootstrap stylesheet or Bootstrap classes. Use a small amount of manual CSS so
the form is usable. Confirm that the form already:

- accepts a study focus and available minutes
- rejects incomplete or unreasonable input
- creates different recommendations for different time ranges
- places feedback in a live status region

The working baseline matters. Bootstrap is being added to understood behavior,
not used to conceal unfinished logic.

## Recorded Build Sequence

1. Run the manual baseline and submit one valid and one invalid example.
2. Identify repeated layout and control-styling work.
3. Add the locked Bootstrap 5.3.8 CSS link above `styles.css`.
4. Add `container`, spacing, grid, and responsive column classes.
5. Build a coherent Bootstrap palette with `bg-dark`, `text-info`,
   `border-warning`, and `bg-info-subtle` utilities.
6. Add `form-label` and `form-control` to the existing labels and inputs.
7. Add `btn btn-info fw-semibold` to the existing submit button.
8. Add the initial `alert alert-secondary` presentation to the status region.
9. Update `showMessage()` so JavaScript changes the Bootstrap alert variant.
10. Run the same valid and invalid tests again.
11. Inspect `styles.css` and emphasize how little local CSS remains.

## Code To Explain

```js
function showMessage(message, type) {
  result.className = `alert alert-${type} mt-4 mb-0`;
  result.textContent = message;
}
```

- `textContent` still owns the safe message output.
- Bootstrap supplies visual variants such as `alert-warning` and
  `alert-success`.
- The project still decides which condition deserves each kind of feedback.

## Tests To Perform

- Submit with both fields empty.
- Submit with `0`, a negative number, and a number greater than `240`.
- Submit with 15, 35, and 60 minutes to exercise all recommendation branches.
- Tab through the form and confirm the focus indicator remains visible.
- Resize below and above the `lg` breakpoint.
- Disable the network once and reload to expose the CDN dependency.

## Misconceptions To Address

- Bootstrap did not create the semantic labels or validation rules.
- Bootstrap classes do not make an interface correct merely by being present.
- The grid controls layout; it does not choose the information hierarchy.
- Bootstrap utilities can produce a polished palette; default appearance is not
  the only fair representation of the framework.
- A library can reduce local CSS without eliminating CSS knowledge.
- Versioned CDN code is still an external project dependency.

## Transition To Demo 2

```text
Bootstrap gave us a fast, consistent starting point.
The next question is how much project-specific identity and behavior we still need.
```

## Optional Time Compression

Paste the header and grid classes as prepared blocks. Manually type the form,
button, and alert classes so students can see how each class changes a specific
part of the interface.
