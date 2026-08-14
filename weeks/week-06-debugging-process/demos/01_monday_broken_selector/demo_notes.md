# Demo Notes - Monday Broken Selector Debugging

**Related Assignment:** Assignment 6 - Debugging & Problem Solving  
**Lecture Use:** Monday live lecture  
**Estimated Time:** 12-18 minutes

## Purpose

Model a calm debugging process using a common DOM mistake: the JavaScript selector does not match the HTML id.

## Delivery Mode

Start with the broken version. Do not reveal `fixed_script.js` first. Let the console error and source comparison drive the fix.

## Walkthrough

1. Open `index.html` and click the button.
2. Open the console and read the error.
3. Inspect the HTML id: `statusButton`.
4. Inspect the JavaScript selector: `#statusBtn`.
5. Rename the selector or compare with `fixed_script.js`.
6. Refresh and test again.

## Misconceptions To Watch

- Students may assume the whole file is broken.
- Students may change random code instead of reading the error.
- Students may not compare exact spelling.

## Lab Bridge

Students should practice identifying symptoms, reading errors, locating causes, and making one focused fix at a time.

## Optional Extension

After fixing the selector, introduce a second small bug such as a misspelled variable name.

## Wednesday Bridge

The Wednesday demo expands from one bug to multiple issues, including a JavaScript selector problem, a condition problem, and a CSS mismatch.
