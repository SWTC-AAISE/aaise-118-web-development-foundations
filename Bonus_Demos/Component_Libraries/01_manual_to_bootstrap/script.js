const planForm = document.querySelector("#planForm");
const focusInput = document.querySelector("#focusInput");
const minutesInput = document.querySelector("#minutesInput");
const result = document.querySelector("#result");

function createPlan(focus, minutes) {
  if (minutes < 20) {
    return `Spend ${minutes} minutes completing one small ${focus} task.`;
  }

  if (minutes < 50) {
    return `Work on ${focus} for 25 minutes, then use the remaining time to review.`;
  }

  return `Complete two 25-minute ${focus} sessions with a 5-minute break between them.`;
}

function showMessage(message, type) {
  result.className = `alert alert-${type} mt-4 mb-0`;
  result.textContent = message;
}

function handlePlanSubmit(event) {
  event.preventDefault();

  const focus = focusInput.value.trim();
  const minutes = Number(minutesInput.value);

  if (!focus || minutes < 1 || minutes > 240) {
    showMessage("Enter a study focus and a time from 1 to 240 minutes.", "warning");
    return;
  }

  showMessage(createPlan(focus, minutes), "success");
}

planForm.addEventListener("submit", handlePlanSubmit);
