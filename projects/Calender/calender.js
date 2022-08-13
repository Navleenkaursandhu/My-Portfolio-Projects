const monthYearDiv = document.querySelector("#monthYear");
const afterDiv = document.querySelector("#after");
const beforeDiv = document.querySelector("#before");
const todayDiv = document.querySelector("#today");
const dateOuterDiv = document.querySelector("#date");
let monthDelta = 0;

let current = new Date();

const updateUI = () => {
  dateOuterDiv.innerHTML = "";
  const monthBeingDisplayed = new Date(current);
  monthBeingDisplayed.setMonth(monthBeingDisplayed.getMonth() + monthDelta);

  monthYearDiv.innerText = monthBeingDisplayed.toLocaleString('default', { month: "long", year: "numeric" });

  const monthStartDate = new Date(monthBeingDisplayed);
  monthStartDate.setDate(1);
 
  const startDate = new Date(monthStartDate); //1
  startDate.setDate(startDate.getDate() - startDate.getDay());//1-1 = 31 July

  for (let week = 0; week <= 5; week++) {
    const weekStartDate = new Date(startDate);
    weekStartDate.setDate(weekStartDate.getDate() + (week * 7));
    const weekContainerElement = document.createElement('div');
    appendWeekElements(weekContainerElement, weekStartDate, monthBeingDisplayed.getMonth());
    dateOuterDiv.appendChild(weekContainerElement);
  }
}

const appendWeekElements = (weekContainerElement, weekStartDate, month) => {
  for (let i = 0; i <= 6; i++) {
    const dateCorrespondingToDay = new Date(weekStartDate);
    dateCorrespondingToDay.setDate(dateCorrespondingToDay.getDate() + i);

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date-elements");

    dateDiv.innerText = dateCorrespondingToDay.getDate();
    dateDiv.setAttribute("id", `date${dateDiv.innerText}`);
    weekContainerElement.appendChild(dateDiv);

    if (dateCorrespondingToDay.getTime() === current.getTime()) {
      console.log(dateCorrespondingToDay.getDate());
      dateDiv.classList.add("date-today");
    }
    
    if (dateCorrespondingToDay.getMonth() !== month) {
      dateDiv.style.color = "grey";
    }
  }
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

updateUI();
