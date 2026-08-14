# Demo Notes - Wednesday JSON To Page

**Related Assignment:** Assignment 10 - Data & APIs  
**Lecture Use:** Wednesday recorded lecture  
**Estimated Time:** 15-20 minutes

## Purpose

Deepen Monday's JSON-shape demo by retrieving structured JSON and turning it into visible page content without making students depend on a live external API.

## Delivery Mode

Start by reading the local `data.json` file. Then build the `fetch`, parse, loop, and DOM creation steps live. Run this through a local server so `fetch()` can load the JSON file.

## Walkthrough

1. Recall Monday's object/property/array access demo.
2. Open `data.json` and identify the array and object properties.
3. Open the page and click "Load resources."
4. Trace `fetch`, `response.json()`, the loop, and DOM creation.
5. Connect safe text output to later security awareness.

## Misconceptions To Watch

- Students may confuse JSON with JavaScript objects.
- Students may expect `fetch()` to directly return the final data.
- Students may try to build HTML strings before they understand the data.

## Lab Bridge

Students can use approved or simulated data, read the data shape, and display selected fields on a page.

## Optional Extension

Add one more object to `data.json` and reload the page.
