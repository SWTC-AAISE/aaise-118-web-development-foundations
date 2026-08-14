# Demo Notes - Wednesday Simulated Login Form

**Related Assignment:** Assignment 15 - Forms & Input Systems  
**Lecture Use:** Wednesday recorded lecture  
**Estimated Time:** 15-20 minutes

## Purpose

Deepen Monday's basic form-submit demo by applying the same form concepts to simulated login state without implying real authentication.

## Delivery Mode

Start from the Monday form pattern: submit event, `preventDefault()`, validation, feedback. Then add the simulated credential check and explicitly label the limits.

## Walkthrough

1. Recall the Monday basic form submission flow.
2. Submit the empty form and inspect the validation message.
3. Try incorrect demo credentials.
4. Try username `student` and password `practice`.
5. Read the code path: submit event, validation, demo credential check, UI update.
6. State clearly that this is front-end practice, not secure login.

## Misconceptions To Watch

- Students may think a front-end password check is secure.
- Students may forget `event.preventDefault()`.
- Students may mix validation with authentication.

## Lab Bridge

Students should build a form that collects input, validates basic requirements, and provides clear feedback.

## Optional Extension

Add a logged-in visual state such as hiding the form after a successful simulated login.
