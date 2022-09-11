const secDiv = document.querySelector("#second-line");
const minDiv = document.querySelector("#minute-line");
const hourDiv = document.querySelector("#hour-line");
const clockDiv = document.querySelector(".clock");

let x1 = 50;
let y1 = 50;

//universal function for setting seconds, minutes, hours, and clock nums attributes
const setSecsMinsHoursClocknumAttributes = (alpha, length) => {
  let xPoint = Math.sin(alpha) * length + x1;
  let yPoint = -(Math.cos(alpha) * length) + y1;
  return {
    x: xPoint,
    y: yPoint,
  }
}

for (let i = 0; i < 12; i++) {
  if (i % 3 === 0) {
    let clockNums = document.createElementNS("http://www.w3.org/2000/svg", "line");

    //setting 12, 3,6 & 9 clock nums
    let clockNumOuter1Attributes = setSecsMinsHoursClocknumAttributes((Math.PI / 6 * i), 40);
    clockNums.setAttribute("x1", clockNumOuter1Attributes.x);
    clockNums.setAttribute("y1", clockNumOuter1Attributes.y);

    let clockNumInner2Attributes = setSecsMinsHoursClocknumAttributes((Math.PI / 6 * i), 30);
    clockNums.setAttribute("x2", clockNumInner2Attributes.x);
    clockNums.setAttribute("y2", clockNumInner2Attributes.y);

    clockNums.classList.add("clock-nums");
    clockDiv.appendChild(clockNums);
  }
  else {
    let clockNums = document.createElementNS("http://www.w3.org/2000/svg", "line");

    //setting 1,2,4,5,7,8,10,11 clock lines
    let clockNumOuter1Attributes = setSecsMinsHoursClocknumAttributes((Math.PI / 6 * i), 40);
    clockNums.setAttribute("x1", clockNumOuter1Attributes.x);
    clockNums.setAttribute("y1", clockNumOuter1Attributes.y);

    let clockNumInner2Attributes = setSecsMinsHoursClocknumAttributes((Math.PI / 6 * i), 34);
    clockNums.setAttribute("x2", clockNumInner2Attributes.x);
    clockNums.setAttribute("y2", clockNumInner2Attributes.y);

    clockNums.classList.add("clock-nums");
    clockDiv.appendChild(clockNums);
  }
}

setInterval(() => {
  let currentTime = new Date();

  let currentHour = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();
  let currentSecs = currentTime.getSeconds();

  //setting seconds clock hand attributes
  let secAttributes = setSecsMinsHoursClocknumAttributes(((2 * Math.PI * currentSecs) / 60), 40);
  secDiv.setAttribute("x2", secAttributes.x);
  secDiv.setAttribute("y2", secAttributes.y);

  //setting minute clock hand attributes
  let minAttributes = setSecsMinsHoursClocknumAttributes((2 * Math.PI * (currentMinutes + currentSecs / 60)) / 60, 35);
  minDiv.setAttribute("x2", minAttributes.x);
  minDiv.setAttribute("y2", minAttributes.y);

  //setting hour clock hand attributes
  let hourAttributes = setSecsMinsHoursClocknumAttributes((2 * Math.PI * (currentHour + currentMinutes / 60)) / 12, 25);
  hourDiv.setAttribute("x2", hourAttributes.x);
  hourDiv.setAttribute("y2", hourAttributes.y);

  let timeInStringFormat = currentTime.toLocaleString();
  document.querySelector("#current-time").innerText = timeInStringFormat;

}, 1000);
