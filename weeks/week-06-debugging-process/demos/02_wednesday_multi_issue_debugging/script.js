const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addTaskButton");
const status = document.querySelector("#status");
const taskList = document.querySelector("#taskList");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText = "") {
    status.textContent = "Please enter a task first.";
    return;
  }

  const item = document.createElement("li");
  item.textContent = taskText;
  taskList.appendChild(item);

  status.textContent = "Task added.";
  taskInput.value = "";
}

addButton.addEventListener("click", addTask);

