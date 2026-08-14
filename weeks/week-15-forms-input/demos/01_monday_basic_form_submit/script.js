const contactForm = document.querySelector("#contactForm");
const nameInput = document.querySelector("#nameInput");
const topicInput = document.querySelector("#topicInput");
const message = document.querySelector("#message");

function handleSubmit(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const topic = topicInput.value.trim();

  if (name === "" || topic === "") {
    message.textContent = "Both fields are required.";
    return;
  }

  message.textContent = `${name} submitted a question about ${topic}.`;
}

contactForm.addEventListener("submit", handleSubmit);

