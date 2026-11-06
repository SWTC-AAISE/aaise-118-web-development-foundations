const commentInput = document.querySelector("#commentInput");
const previewButton = document.querySelector("#previewButton");
const preview = document.querySelector("#preview");

function getComment() {
  return commentInput.value.trim();
}

function showStructuredPreview(comment) {
  const label = document.createElement("strong");
  label.textContent = "Preview: ";

  const commentText = document.createTextNode(comment);

  preview.replaceChildren(label, commentText);
}

function previewComment() {
  const comment = getComment();

  if (comment === "") {
    preview.textContent = "Enter a comment before previewing.";
    return;
  }

  showStructuredPreview(comment);
}

previewButton.addEventListener("click", previewComment);
