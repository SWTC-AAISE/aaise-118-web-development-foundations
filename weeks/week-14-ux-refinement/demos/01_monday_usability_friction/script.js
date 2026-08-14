const minutesInput = document.querySelector("#minutesInput");
const goButton = document.querySelector("#goButton");
const result = document.querySelector("#result");

goButton.addEventListener("click", function () {
  result.textContent = `You entered ${minutesInput.value}.`;
});

