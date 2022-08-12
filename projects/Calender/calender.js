const monthYearDiv = document.querySelector("#monthYear");
const afterDiv = document.querySelector("#after");
const beforeDiv = document.querySelector("#before");
const todayDiv = document.querySelector("#today");
const dateOuterDiv = document.querySelector("#date");
let monthDelta = 0;

let current = new Date();

const updateUI = () => {
  const monthBeingDisplayed = new Date(current);
  monthBeingDisplayed.setMonth(monthBeingDisplayed.getMonth() + monthDelta);

  monthYearDiv.innerText= monthBeingDisplayed.toLocaleString('default', { month: "long", year:"numeric"});
}

afterDiv.onclick = () => {
  monthDelta++;
  updateUI();
}

beforeDiv.onclick = () => {
  monthDelta--;
  updateUI();
}

todayDiv.onclick = () => {
  monthDelta = 0;
  updateUI();
}


const weekStartDate = new Date(current);

weekStartDate.setDate(weekStartDate.getDate() - weekStartDate.getDay());
console.log(weekStartDate);


for(let i = 0; i <=6 ; i++){
  const dateCorrespondingToDay = new Date(weekStartDate);
  dateCorrespondingToDay.setDate(dateCorrespondingToDay.getDate() + i);

  let dateDiv =  document.createElement("div");
  dateDiv.innerText = dateCorrespondingToDay.getDate();
  dateDiv.setAttribute("id", `date${dateDiv.innerText}`);
  
  dateOuterDiv.appendChild(dateDiv);

  // to detect today & highlight it
  if (dateCorrespondingToDay.getTime() === current.getTime()) {
    console.log(dateCorrespondingToDay.getDate());

    let id = dateCorrespondingToDay.getDate();
    document.querySelector(`#date${id}`).classList.add("date-today");
  }
  console.log(dateCorrespondingToDay);
}

