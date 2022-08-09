const hourFirstDiv = document.querySelector("#hour-first");
const hourSecondDiv = document.querySelector("#hour-second");
const minuteFirstDiv = document.querySelector("#min-first");
const minuteSecondDiv = document.querySelector("#min-second");
const secFirstDiv = document.querySelector("#sec-first");
const secSecondDiv = document.querySelector("#sec-second");

const currentTime = () => {
  const today = new Date();
  let hour = today.getHours().toString().padStart(2, "0");
  let minute = today.getMinutes().toString().padStart(2, "0");
  let sec = today.getSeconds().toString().padStart(2, "0");

  let hourArr = hour.split("");
  let minArr = minute.split("");
  let secArr = sec.split("");

  let array1 = [...hourArr, ...minArr, ...secArr];

  let array2 = [hourFirstDiv, hourSecondDiv, minuteFirstDiv, minuteSecondDiv, secFirstDiv, secSecondDiv]

  for (let i = 0; i < array2.length; i++) {
    const digitValue = array1[i];
    const digitElement = array2[i];

    for (let j = 0; j <= 9; j++) {
      digitElement.classList.remove(`num${j}`);
    }
    digitElement.classList.add(`num${digitValue}`);
  }
}

setInterval(currentTime, 1000);
