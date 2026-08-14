const showButton = document.querySelector("#showButton");
const output = document.querySelector("#output");

const studyResource = {
  name: "Library Research Help",
  category: "Support",
  available: true,
  tags: ["research", "citations", "databases"]
};

function showSelectedData() {
  output.textContent =
    `Name: ${studyResource.name}\n` +
    `Category: ${studyResource.category}\n` +
    `First tag: ${studyResource.tags[0]}`;
}

showButton.addEventListener("click", showSelectedData);

