const button = document.querySelector("#statusBtn");
const statusMessage = document.querySelector("#statusMessage");

function showStatus() {
  statusMessage.textContent = "Status checked successfully.";
}

button.addEventListener("click", showStatus);

