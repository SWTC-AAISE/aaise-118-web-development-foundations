const searchInput = document.querySelector("#searchInput");
const status = document.querySelector("#status");
const results = document.querySelector("#results");

const resources = [
  "Library research help",
  "Study group signup",
  "Technology support desk",
  "Tutoring appointment",
  "Weekly planning template"
];

let filterRunCount = 0;

function renderResults(matches) {
  results.textContent = "";

  for (const resource of matches) {
    const item = document.createElement("li");
    item.textContent = resource;
    results.appendChild(item);
  }
}

function filterResources() {
  filterRunCount += 1;
  const searchTerm = searchInput.value.trim().toLowerCase();
  const matches = resources.filter(function (resource) {
    return resource.toLowerCase().includes(searchTerm);
  });

  status.textContent = `Filter ran ${filterRunCount} time(s).`;
  renderResults(matches);
}

searchInput.addEventListener("input", filterResources);
renderResults(resources);

