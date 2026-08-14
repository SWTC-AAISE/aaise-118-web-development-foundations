const commentInput = document.querySelector("#commentInput");
const previewButton = document.querySelector("#previewButton");
const preview = document.querySelector("#preview");

function getComment() {
  return commentInput.value.trim();
}

function previewComment() {
  const comment = getComment();

  if (comment === "") {
    preview.textContent = "Enter a comment before previewing.";
    return;
  }

  preview.textContent = `Preview: ${comment}`;
}

previewButton.addEventListener("click", previewComment);

