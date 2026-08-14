# Demo Notes - Wednesday Multi-File Organization

**Related Assignment:** Assignment 9 - Modular Thinking  
**Lecture Use:** Wednesday recorded lecture  
**Estimated Time:** 15-20 minutes

## Purpose

Deepen Monday's modularity demo by showing one practical next step: separating related responsibilities into multiple JavaScript files.

## Delivery Mode

Start from the Monday one-file version. Move one responsibility at a time into a separate file and refresh after each move. The finished files are the reference state.

## Concept Shown

- modularity is the design idea
- separate files are one way to organize modular code
- script loading order matters when files depend on each other
- multiple files can make responsibilities easier to locate

## Walkthrough

1. Start from the one-file version.
2. Move decision logic into `planLogic.js`.
3. Move display logic into `display.js`.
4. Keep event wiring in `app.js`.
5. Check the script order in `index.html`.
6. Test the behavior after the files are separated.

## Misconceptions To Watch

- Students may think each function must be in a separate file.
- Students may load `app.js` before the files it depends on.
- Students may confuse this with advanced ES modules.

## Lab Bridge

Students may keep one file if it is well organized, or use multiple files when the separation makes the project clearer. The goal is responsibility separation, not file count for its own sake.

