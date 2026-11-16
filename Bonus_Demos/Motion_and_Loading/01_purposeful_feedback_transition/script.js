const planForm = document.querySelector("#plan-form");
const focusInput = document.querySelector("#focus-input");
const minutesInput = document.querySelector("#minutes-input");
const feedback = document.querySelector("#feedback");
const feedbackTitle = document.querySelector("#feedback-title");
const feedbackMessage = document.querySelector("#feedback-message");

function createPlan(focus, minutes) {
  if (minutes < 20) {
    return `Spend ${minutes} minutes completing one small ${focus} task.`;
  }

  if (minutes < 50) {
    return `Work on ${focus} for 25 minutes, then use the remaining time to review.`;
  }

  return `Complete two 25-minute ${focus} sessions with a 5-minute break between them.`;
}

function showFeedback({ title, message, state }) {
  feedback.classList.add("is-preparing");
  feedback.classList.remove("is-neutral", "is-success", "is-warning", "is-emphasis");

  requestAnimationFrame(() => {
    feedbackTitle.textContent = title;
    feedbackMessage.textContent = message;
    feedback.classList.add(`is-${state}`);

    requestAnimationFrame(() => {
      feedback.classList.remove("is-preparing");

      if (state === "success") {
        feedback.classList.add("is-emphasis");
      }
    });
  });
}

function handleSubmit(event) {
  event.preventDefault();

  const focus = focusInput.value.trim();
  const minutes = Number(minutesInput.value);

  if (!focus || minutes < 1 || minutes > 240) {
    showFeedback({
      title: "Check your entries",
      message: "Enter a study focus and a time from 1 to 240 minutes.",
      state: "warning",
    });
    return;
  }

  showFeedback({
    title: "Recommended plan",
    message: createPlan(focus, minutes),
    state: "success",
  });
}

planForm.addEventListener("submit", handleSubmit);
