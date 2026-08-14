const minutesInput = document.querySelector("#minutesInput");
const planButton = document.querySelector("#planButton");
const result = document.querySelector("#result");

function createPlan(minutes) {
  if (minutes < 20) {
    return "Choose one small task and finish it first.";
  }

  return "Work for 25 minutes, then take a short break.";
}

function showPlan() {
  const minutes = Number(minutesInput.value);

  if (minutes <= 0) {
    result.textContent = "Enter a positive number of minutes.";
    return;
  }

  result.textContent = `Recommended plan: ${createPlan(minutes)}`;
}

planButton.addEventListener("click", showPlan);

