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
  listElement.style.cssText = "margin-bottom: 10px";
  listElement.innerText = text;

  let doneButton = document.createElement("button");
  doneButton.style.cssText = `
    margin-left: 10px; 
    border: none; 
    border-radius: 10px;
   `;
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
