# Demo Notes - Wednesday Fetch Timing Shape

**Related Assignment:** Assignment 8 - Asynchronous Behavior  
**Lecture Use:** Wednesday recorded lecture  
**Estimated Time:** 15-20 minutes

## Purpose

Deepen Monday's delayed-message demo by connecting timing to request-shaped behavior. Some code runs now, and some code finishes later because data has to be requested and received.

## Delivery Mode

Start from the Monday "now/later" idea. Build the `setTimeout` ordering first, then add the `fetch()` example. Run this through a local server so the local JSON request works.

## Walkthrough

1. Recall the Monday delayed-message demo.
2. Click "Run timing example" and read the displayed order.
3. Explain that `setTimeout` schedules later work.
4. Click "Load sample data" and connect `fetch()` to a request.
5. Explain that `await` pauses inside the async function while the browser waits for the future result.

## Misconceptions To Watch

- Students may expect code to finish in the order it is typed.
- Students may think `await` makes waiting disappear.
- Students may confuse `fetch` with the data itself.

## Lab Bridge

Students should explain what happens now, what happens later, and where a Promise represents a future result.

## Optional Extension

Open DevTools Network and show `data.json` being requested.
