// These variables connect this script to elements already present in the HTML.
const countDisplay = document.querySelector("#countDisplay");
const addButton = document.querySelector("#addButton");
const resetButton = document.querySelector("#resetButton");

// State is the data the program remembers while it is running.
// This top-level variable is shared by the functions below, so they all read
// and update the same counter. It starts at 0 each time the page is loaded.
let completedSessions = 0;

// Show the current state in the page.
// The displayed text is updated from completedSessions; it is not the state itself.
function renderCount() {
  countDisplay.textContent = `Completed sessions: ${completedSessions}`;
}

// Variables declared inside a function belong to that function's local scope.
// This function can also access completedSessions from the outer script scope.
// A user action changes that shared state, then refreshes the display to match it.
function addSession() {
  completedSessions += 1;
  renderCount();
}

// Resetting also changes the state, then refreshes the display.
function resetSessions() {
  completedSessions = 0;
  renderCount();
}

// These event listeners connect user actions to the functions that update state.
addButton.addEventListener("click", addSession);
resetButton.addEventListener("click", resetSessions);

// State in this file is not automatically available to another JavaScript file.
// Files can share state through an explicit mechanism, such as exporting and
// importing a value in JavaScript modules, or using browser storage.
