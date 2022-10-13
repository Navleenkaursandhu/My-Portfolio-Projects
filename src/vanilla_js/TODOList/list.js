const addTaskDiv = document.querySelector("#add-task");
const inputTask = document.querySelector("#input-task");
const unorderedList = document.querySelector("#list");

addTaskDiv.onclick = () => {
  let text = inputTask.value;
  inputTask.value = "";

  addList(text);
}

const addList = (text) => {
  let listElement = document.createElement("li");
  listElement.innerText = text;

  let doneButton = document.createElement("button");
  doneButton.innerText = "DONE";

  unorderedList.appendChild(listElement);
  listElement.appendChild(doneButton);

  taskDone(doneButton, listElement);
}

const taskDone = (doneBtn, listElem) => {
  doneBtn.onclick = () => {
    listElem.remove();
  }
}
