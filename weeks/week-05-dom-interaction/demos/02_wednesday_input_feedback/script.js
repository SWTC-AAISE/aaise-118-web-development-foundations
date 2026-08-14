const nameInput = document.querySelector("#nameInput");
const greetButton = document.querySelector("#greetButton");
const message = document.querySelector("#message");

function createGreeting() {
  const name = nameInput.value.trim();

  if (name === "") {
    message.textContent = "Please enter a name first.";
    return;
  }

  message.textContent = `Hello, ${name}. Welcome to the page.`;
}

greetButton.addEventListener("click", createGreeting);

