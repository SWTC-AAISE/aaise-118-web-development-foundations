# Demo Notes - Wednesday Trust Boundaries

**Related Assignment:** Assignment 13 - Security & Reliability  
**Lecture Use:** Wednesday recorded lecture  
**Estimated Time:** 12-18 minutes

## Purpose

Deepen Monday's safe-output demo by naming the trust boundary: user input enters the application from outside the code and must be handled carefully.

## Delivery Mode

Start from a working safe preview. Discuss what would be risky about treating user input as raw HTML, but keep the code on the safe version.

## Concept Shown

- input crosses a trust boundary
- XSS awareness begins with unsafe output patterns
- CORS/API issues are browser-enforced boundaries, not random failures
- simulated login is not real authentication

## Walkthrough

1. Type a normal comment and preview it.
2. Type text that looks like HTML and show that it remains text.
3. Point to `textContent` as the safe beginner habit.
4. Name the boundary: outside input enters the page.
5. Connect the idea to XSS, CORS/API failures, and simulated-login honesty.

## Lab Bridge

Students should identify risky assumptions in their own projects and add simple protections or clear explanations.

