const startButton = document.querySelector("#startButton");
const status = document.querySelector("#status");

function startDelay() {
  status.textContent = "Waiting...";

  setTimeout(function () {
    status.textContent = "The delayed action finished.";
  }, 1500);
}

startButton.addEventListener("click", startDelay);

