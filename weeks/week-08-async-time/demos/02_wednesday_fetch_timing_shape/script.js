const runButton = document.querySelector("#runButton");
const loadButton = document.querySelector("#loadButton");
const log = document.querySelector("#log");

function addLog(message) {
  const item = document.createElement("li");
  item.textContent = message;
  log.appendChild(item);
}

function runTimingExample() {
  log.textContent = "";

  addLog("1. Start now");

  setTimeout(function () {
    addLog("3. This runs later because setTimeout waited");
  }, 1000);

  addLog("2. End now");
}

async function loadSampleData() {
  addLog("Request started with fetch()");

  const response = await fetch("data.json");
  const data = await response.json();

  addLog(`Future result received: ${data.resource} is ${data.status}`);
}

runButton.addEventListener("click", runTimingExample);
loadButton.addEventListener("click", loadSampleData);

