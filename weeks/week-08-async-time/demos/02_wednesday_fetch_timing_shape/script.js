// Set up the DOM interaction
const runButton = document.querySelector("#runButton");
const loadButton = document.querySelector("#loadButton");
const log = document.querySelector("#log");

// Function to display interactive messages
function addLog(message) {
  const item = document.createElement("li");
  item.textContent = message;
  log.appendChild(item);
}

/* * Demonstrates the timing order of actions
    - Notice the numbers - this shows the relative order 1 -> 2 -> 3
      but they are listed "differently" in the code 
*/
function runTimingExample() {
  log.textContent = "";

  addLog("1. Start now");

  // Note: the setTimeout() is "async" by nature [under-the-hood]
  setTimeout(function () {
    addLog("3. This runs later because setTimeout waited");
  }, 1000);

  addLog("2. End now");
}

/* * This function demonstrates the "fetch" timing (instead of using `setTimeout()`)
    - It shows how the "real world" activity of retrieving data from an external source occurs
*/
async function loadSampleData() {
  addLog("Request started with fetch()");

  const response = await fetch("data.json");
  const data = await response.json();

  addLog(`Future result received: ${data.resource} is ${data.status}`);
}

// Add the event listener(s)
runButton.addEventListener("click", runTimingExample);
loadButton.addEventListener("click", loadSampleData);

