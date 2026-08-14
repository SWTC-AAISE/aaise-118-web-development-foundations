function choosePlan(minutes) {
  if (minutes <= 0) {
    return "Enter a positive number of minutes.";
  }

  if (minutes < 30) {
    return "Choose one small task.";
  }

  return "Work for 25 minutes, then take a short break.";
}

