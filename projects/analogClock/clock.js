const secDiv = document.querySelector("#second-line");
const minDiv = document.querySelector("#minute-line");
const hourDiv = document.querySelector("#hour-line");

let x1 = 50;
let y1 = 50;

setInterval(() => {
  let currentTime = new Date();

  let currentHour = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();
  let currentSecs = currentTime.getSeconds();

  let setSecsx2 = (Math.sin((2 * Math.PI * currentSecs) / 60) * 40) + x1;
  let setSecsy2 = (-Math.cos((2 * Math.PI * currentSecs) / 60) * 40) + y1;

  secDiv.setAttribute("x2", setSecsx2);
  secDiv.setAttribute("y2", setSecsy2);

  let setMinsx2 = (Math.sin((2 * Math.PI * (currentMinutes + currentSecs / 60)) / 60) * 35) + x1;
  let setMinsy2 = (-Math.cos((2 * Math.PI * (currentMinutes + currentSecs / 60)) / 60) * 35) + y1;

  minDiv.setAttribute("x2", setMinsx2);
  minDiv.setAttribute("y2", setMinsy2);


  let setHourx2 = (Math.sin((2 * Math.PI * (currentHour + currentMinutes / 60)) / 12) * 25) + x1;
  let setHoury2 = (-Math.cos((2 * Math.PI * (currentHour + currentMinutes / 60)) / 12) * 25) + y1;

  hourDiv.setAttribute("x2", setHourx2);
  hourDiv.setAttribute("y2", setHoury2);

  let timeInStringFormat = currentTime.toLocaleString();

  document.querySelector("#current-time").innerText = timeInStringFormat;

}, 1000);
