const score = 82;
const lateSubmissions = 1;

function getProgressMessage(currentScore, lateCount) {
  if (currentScore >= 80 && lateCount <= 1) {
    return "On track";
  }

  if (currentScore >= 70) {
    return "Needs attention";
  }

  return "Schedule support";
}

const message = getProgressMessage(score, lateSubmissions);

console.log("Score:", score);
console.log("Late submissions:", lateSubmissions);
console.log("Progress message:", message);

