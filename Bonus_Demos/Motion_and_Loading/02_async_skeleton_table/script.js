const resources = [
  { title: "Responsive Layout Practice", topic: "CSS", format: "Lab", minutes: 25 },
  { title: "DOM Event Review", topic: "JavaScript", format: "Guide", minutes: 15 },
  { title: "Async Timing Notes", topic: "JavaScript", format: "Handout", minutes: 20 },
  { title: "Accessible Form Checklist", topic: "UX", format: "Checklist", minutes: 10 },
  { title: "Safe Output Examples", topic: "Security", format: "Demo", minutes: 18 },
  { title: "Performance Search Practice", topic: "Performance", format: "Lab", minutes: 30 },
  { title: "State And localStorage", topic: "JavaScript", format: "Guide", minutes: 22 },
  { title: "Semantic HTML Review", topic: "HTML", format: "Quiz", minutes: 12 },
];

const DEBOUNCE_DELAY = 500;
const SKELETON_THRESHOLD = 300;
const RESPONSE_DELAYS = {
  fast: 150,
  slow: 1300,
  error: 900,
};

const searchInput = document.querySelector("#search-input");
const scenarioSelect = document.querySelector("#scenario-select");
const resetButton = document.querySelector("#reset-button");
const resultsRegion = document.querySelector("#results-region");
const resultsBody = document.querySelector("#results-body");
const loadingStatus = document.querySelector("#loading-status");

let debounceTimer;
let responseTimer;
let skeletonTimer;
let requestVersion = 0;

function createCell(text) {
  const cell = document.createElement("td");
  cell.textContent = text;
  return cell;
}

function renderRows(items) {
  resultsBody.replaceChildren();

  items.slice(0, 5).forEach((resource) => {
    const row = document.createElement("tr");
    row.append(
      createCell(resource.title),
      createCell(resource.topic),
      createCell(resource.format),
      createCell(String(resource.minutes)),
    );
    resultsBody.append(row);
  });
}

function renderMessage(message, className = "message-row") {
  const row = document.createElement("tr");
  row.className = className;

  const cell = document.createElement("td");
  cell.colSpan = 4;
  cell.textContent = message;
  row.append(cell);

  resultsBody.replaceChildren(row);
}

function renderSkeletonRows() {
  const fragment = document.createDocumentFragment();

  for (let rowIndex = 0; rowIndex < 5; rowIndex += 1) {
    const row = document.createElement("tr");
    row.setAttribute("aria-hidden", "true");

    for (let columnIndex = 0; columnIndex < 4; columnIndex += 1) {
      const cell = document.createElement("td");
      const line = document.createElement("span");
      line.className = columnIndex > 1 ? "skeleton-line short" : "skeleton-line";
      cell.append(line);
      row.append(cell);
    }

    fragment.append(row);
  }

  resultsBody.replaceChildren(fragment);
}

function filterResources(query) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return resources;
  }

  return resources.filter((resource) => {
    return `${resource.title} ${resource.topic} ${resource.format}`
      .toLowerCase()
      .includes(normalizedQuery);
  });
}

function finishRequest(version, query, scenario) {
  if (version !== requestVersion) {
    return;
  }

  clearTimeout(skeletonTimer);
  resultsRegion.setAttribute("aria-busy", "false");

  if (scenario === "error") {
    renderMessage("The simulated resource request failed. Change the response option and try again.", "message-row error-row");
    loadingStatus.textContent = "Resources could not be loaded.";
    return;
  }

  const matches = filterResources(query);

  if (matches.length === 0) {
    renderMessage(`No resources match "${query}". Try a broader search.`);
    loadingStatus.textContent = "No matching resources found.";
    return;
  }

  renderRows(matches);
  loadingStatus.textContent = `${Math.min(matches.length, 5)} resource${matches.length === 1 ? "" : "s"} loaded.`;
}

function startRequest(query, version) {
  const scenario = scenarioSelect.value;
  resultsRegion.setAttribute("aria-busy", "true");
  loadingStatus.textContent = "Updating resources.";

  skeletonTimer = setTimeout(() => {
    if (version !== requestVersion) {
      return;
    }

    renderSkeletonRows();
    loadingStatus.textContent = "Loading study resources.";
  }, SKELETON_THRESHOLD);

  responseTimer = setTimeout(() => {
    finishRequest(version, query, scenario);
  }, RESPONSE_DELAYS[scenario]);
}

function scheduleSearch() {
  clearTimeout(debounceTimer);
  clearTimeout(responseTimer);
  clearTimeout(skeletonTimer);

  requestVersion += 1;
  resultsRegion.setAttribute("aria-busy", "false");
  loadingStatus.textContent = "Waiting for typing to pause.";

  const query = searchInput.value;
  const version = requestVersion;

  debounceTimer = setTimeout(() => {
    startRequest(query, version);
  }, DEBOUNCE_DELAY);
}

function resetDemo() {
  clearTimeout(debounceTimer);
  clearTimeout(responseTimer);
  clearTimeout(skeletonTimer);

  requestVersion += 1;
  searchInput.value = "";
  scenarioSelect.value = "slow";
  resultsRegion.setAttribute("aria-busy", "false");
  renderRows(resources);
  loadingStatus.textContent = "Showing 5 of 8 resources.";
  searchInput.focus();
}

searchInput.addEventListener("input", scheduleSearch);
scenarioSelect.addEventListener("change", scheduleSearch);
resetButton.addEventListener("click", resetDemo);

renderRows(resources);
loadingStatus.textContent = "Showing 5 of 8 resources.";
