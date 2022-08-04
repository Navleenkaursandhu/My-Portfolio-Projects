const addTaskDiv= document.querySelector("#add-task");
const inputTaskDiv= document.querySelector("#input-task");




addTaskDiv.onclick = () => {
  
  console.log(inputTaskDiv.value);
  inputTaskDiv.value = "";

  
}
