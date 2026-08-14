const countDisplay = document.querySelector("#countDisplay");
const addButton = document.querySelector("#addButton");
const resetButton = document.querySelector("#resetButton");

let completedSessions = 0;

function renderCount() {
  countDisplay.textContent = `Completed sessions: ${completedSessions}`;
}

function addSession() {
  completedSessions += 1;
  renderCount();
}

function resetSessions() {
  completedSessions = 0;
  renderCount();
}

addButton.addEventListener("click", addSession);
resetButton.addEventListener("click", resetSessions);

