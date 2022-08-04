const addTaskDiv = document.querySelector("#add-task");
const inputTask = document.querySelector("#input-task");
const unorderedList = document.querySelector("#list");

addTaskDiv.onclick = () => {
  let text = inputTask.value;
  inputTaskDiv.value = "";

  addList(text);
}

const addList = (text) => {
  let listElement = document.createElement("li");
  listElement.innerText = text;

  let doneButton = document.createElement("button");
  doneButton.style.marginLeft = "10px";
  doneButton.innerText = "DONE";

  unorderedList.appendChild(listElement);
  listElement.appendChild(doneButton);

  taskDone(doneButton, listElement);
}

const taskDone = (doneBtn, listElem) => {
  doneBtn.onclick = () => {
    console.log("done task");
    listElem.remove();
  }
}

