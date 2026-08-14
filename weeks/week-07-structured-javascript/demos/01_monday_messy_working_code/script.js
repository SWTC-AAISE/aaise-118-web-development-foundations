const minutesInput = document.querySelector("#minutesInput");
const planButton = document.querySelector("#planButton");
const message = document.querySelector("#message");

planButton.addEventListener("click", function () {
  const minutes = Number(minutesInput.value);

  if (minutes <= 0) {
    message.textContent = "Enter a positive number of minutes.";
  } else if (minutes < 20) {
    message.textContent = "Plan: choose one tiny task and work for " + minutes + " minutes.";
  } else if (minutes < 45) {
    message.textContent = "Plan: study for 25 minutes, then take a short break.";
  } else {
    message.textContent = "Plan: split the time into two focused sessions with a break.";
  }
});

