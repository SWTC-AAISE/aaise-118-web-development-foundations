const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const statusMessage = document.querySelector("#status");
const taskList = document.querySelector("#taskList");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    statusMessage.textContent = "Please enter a task first.";
    return;
  }

  const item = document.createElement("li");
  item.textContent = taskText;
  taskList.appendChild(item);

  statusMessage.textContent = "Task added.";
  taskInput.value = "";
}

addButton.addEventListener("click", addTask);

