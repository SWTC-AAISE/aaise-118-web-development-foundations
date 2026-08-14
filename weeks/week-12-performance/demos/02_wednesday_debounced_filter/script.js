const searchInput = document.querySelector("#searchInput");
const status = document.querySelector("#status");
const results = document.querySelector("#results");

const resources = [
  "Library research help",
  "Writing center appointment",
  "Technology support desk",
  "Math tutoring session",
  "Accessibility services",
  "Career exploration workshop",
  "Study group signup",
  "Financial aid question desk"
];

let filterRunCount = 0;
let debounceTimer = null;

function renderResults(matches) {
  results.textContent = "";

  for (const item of matches) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    results.appendChild(listItem);
  }
}

function filterResources() {
  filterRunCount += 1;
  const searchTerm = searchInput.value.trim().toLowerCase();

  const matches = resources.filter(function (resource) {
    return resource.toLowerCase().includes(searchTerm);
  });

  status.textContent = `Filter ran ${filterRunCount} time(s). Showing ${matches.length} result(s).`;
  renderResults(matches);
}

searchInput.addEventListener("input", function () {
  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(function () {
    filterResources();
  }, 300);
});

renderResults(resources);

