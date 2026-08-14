const minutesInput = document.querySelector("#minutesInput");
const planButton = document.querySelector("#planButton");

function readMinutes() {
  return Number(minutesInput.value);
}

function handlePlanClick() {
  const minutes = readMinutes();
  const plan = choosePlan(minutes);
  updateResult(plan);
}

planButton.addEventListener("click", handlePlanClick);

