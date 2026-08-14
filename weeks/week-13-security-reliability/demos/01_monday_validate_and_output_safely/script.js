const noteInput = document.querySelector("#noteInput");
const saveButton = document.querySelector("#saveButton");
const feedback = document.querySelector("#feedback");

function showNote() {
  const note = noteInput.value.trim();

  if (note === "") {
    feedback.textContent = "Please enter a note first.";
    return;
  }

  feedback.textContent = `Saved note: ${note}`;
}

saveButton.addEventListener("click", showNote);

