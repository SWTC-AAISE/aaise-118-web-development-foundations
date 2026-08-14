const loadButton = document.querySelector("#loadButton");
const resourceList = document.querySelector("#resourceList");

function createResourceCard(resource) {
  const card = document.createElement("article");
  card.className = "resource-card";

  const title = document.createElement("h2");
  title.textContent = resource.name;

  const category = document.createElement("p");
  category.textContent = `Category: ${resource.category}`;

  const use = document.createElement("p");
  use.textContent = resource.use;

  card.append(title, category, use);
  return card;
}

async function loadResources() {
  resourceList.textContent = "Loading...";

  const response = await fetch("data.json");
  const resources = await response.json();

  resourceList.textContent = "";

  for (const resource of resources) {
    resourceList.appendChild(createResourceCard(resource));
  }
}

loadButton.addEventListener("click", loadResources);

