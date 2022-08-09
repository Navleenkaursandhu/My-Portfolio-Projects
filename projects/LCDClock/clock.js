

const currentTime = () => {
const today =  new Date();
let hour = today.getHours().toString().padStart(2,"0");
let minute = today.getMinutes().toString().padStart(2,"0");
let sec = today.getSeconds().toString().padStart(2,"0");

let hourArr = hour.split("");
let minArr = minute.split("");
let secArr = sec.split("");

let array  = [...hourArr, ...minArr, ...secArr];

//console.log(array);

array.map(() => {

  if(array[0] === '0'){
    document.querySelector("#hour-first-digit").classList.add("num0-top-segment");
  }

})
}

setInterval(currentTime, 1000);

