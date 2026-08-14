const message = document.querySelector("#message");
const updateButton = document.querySelector("#updateButton");

function updateMessage() {
  message.textContent = "The button changed the page.";
}

updateButton.addEventListener("click", updateMessage);

