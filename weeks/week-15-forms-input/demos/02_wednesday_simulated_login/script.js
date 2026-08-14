const loginForm = document.querySelector("#loginForm");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector("#message");

const demoUser = {
  username: "student",
  password: "practice"
};

function validateLoginForm() {
  if (username.value.trim() === "" || password.value.trim() === "") {
    return "Both fields are required.";
  }

  return "";
}

function checkDemoLogin() {
  return (
    username.value.trim() === demoUser.username &&
    password.value === demoUser.password
  );
}

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const validationMessage = validateLoginForm();

  if (validationMessage !== "") {
    message.textContent = validationMessage;
    return;
  }

  if (checkDemoLogin()) {
    message.textContent = "Signed in for this demo. This is not real authentication.";
  } else {
    message.textContent = "Demo credentials did not match.";
  }
});

