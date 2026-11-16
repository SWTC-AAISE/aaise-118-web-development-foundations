const planForm = document.querySelector("#plan-form");
const focusInput = document.querySelector("#focus-input");
const minutesInput = document.querySelector("#minutes-input");
const feedback = document.querySelector("#feedback");
const feedbackTitle = document.querySelector("#feedback-title");
const feedbackMessage = document.querySelector("#feedback-message");
const replayButton = document.querySelector("#replay-button");
const cancelButton = document.querySelector("#cancel-button");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let feedbackAnimation;

function createPlan(focus, minutes) {
  if (minutes < 20) {
    return `Spend ${minutes} minutes completing one small ${focus} task.`;
  }
  if (minutes < 50) {
    return `Work on ${focus} for 25 minutes, then use the remaining time to review.`;
  }
  return `Complete two 25-minute ${focus} sessions with a 5-minute break between them.`;
}

function playFeedbackMotion() {
  if (reducedMotion.matches) {
    feedbackAnimation = undefined;
    return;
  }

  feedbackAnimation?.cancel();
  feedbackAnimation = feedback.animate(
    [
      { opacity: 0, transform: "translateY(6px) scale(1)" },
      { opacity: 1, transform: "translateY(0) scale(1.012)", offset: 0.7 },
      { opacity: 1, transform: "translateY(0) scale(1)" },
    ],
    { duration: 320, easing: "ease-out" },
  );
}

function showFeedback({ title, message, state }) {
  feedbackAnimation?.cancel();
  feedback.classList.remove("is-neutral", "is-success", "is-warning");
  feedback.classList.add(`is-${state}`);
  feedbackTitle.textContent = title;
  feedbackMessage.textContent = message;
  playFeedbackMotion();
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

function replayMotion() {
  playFeedbackMotion();
}

function cancelMotion() {
  feedbackAnimation?.cancel();
  feedbackAnimation = undefined;
}

planForm.addEventListener("submit", handleSubmit);
replayButton.addEventListener("click", replayMotion);
cancelButton.addEventListener("click", cancelMotion);
