const minutesInput = document.querySelector("#minutesInput");
const planButton = document.querySelector("#planButton");
const message = document.querySelector("#message");

function getMinutesAvailable() {
  return Number(minutesInput.value);
}

function chooseStudyPlan(minutes) {
  if (minutes <= 0) {
    return "Enter a positive number of minutes.";
  }

  if (minutes < 20) {
    return `Plan: choose one tiny task and work for ${minutes} minutes.`;
  }

  if (minutes < 45) {
    return "Plan: study for 25 minutes, then take a short break.";
  }

  return "Plan: split the time into two focused sessions with a break.";
}

function showPlan() {
  const minutes = getMinutesAvailable();
  const plan = chooseStudyPlan(minutes);
  message.textContent = plan;
}

planButton.addEventListener("click", showPlan);

