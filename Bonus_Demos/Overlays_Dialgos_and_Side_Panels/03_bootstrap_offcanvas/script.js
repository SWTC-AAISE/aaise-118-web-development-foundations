const projectPanel = document.querySelector("#projectPanel");
const panelStatus = document.querySelector("#panelStatus");

projectPanel.addEventListener("shown.bs.offcanvas", () => {
  panelStatus.textContent = "Project panel is open.";
});

projectPanel.addEventListener("hidden.bs.offcanvas", () => {
  panelStatus.textContent = "Project panel is closed.";
});

