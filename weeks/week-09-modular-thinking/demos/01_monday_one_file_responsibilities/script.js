const minutesInput = document.querySelector("#minutesInput");
const planButton = document.querySelector("#planButton");
const result = document.querySelector("#result");

function readMinutes() {
  return Number(minutesInput.value);
}

function choosePlan(minutes) {
  if (minutes <= 0) {
    return "Enter a positive number of minutes.";
  }

  if (minutes < 30) {
    return "Choose one small task.";
  }

  return "Work for 25 minutes, then take a short break.";
}

function updateResult(message) {
  result.textContent = message;
}

function handlePlanClick() {
  const minutes = readMinutes();
  const plan = choosePlan(minutes);
  updateResult(plan);
}

planButton.addEventListener("click", handlePlanClick);

