const projectDialog = document.querySelector("#projectDialog");
const openButton = document.querySelector("#openDetails");
const closeButton = document.querySelector("#closeDetails");
const pageStatus = document.querySelector("#pageStatus");

openButton.addEventListener("click", () => {
  projectDialog.showModal();
  pageStatus.textContent = "Project details are open.";
});

closeButton.addEventListener("click", () => {
  projectDialog.close("explicit-close");
});

projectDialog.addEventListener("close", () => {
  pageStatus.textContent = "Project details are closed.";
  openButton.focus();
});

