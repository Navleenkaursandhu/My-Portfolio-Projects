//on clicking PLAY random color box appear

let isBlinking = true;

const playButtonDiv = document.querySelector("#play-button");

const array = [1,2,3,4,5];

   const boxArray = array.sort((a,b) => {
     return 0.5 - Math.random();
   }) // [3,4,5,2,1]



const sleep = (ms) => {
  return new Promise((resolve) => {
    return setTimeout(resolve, ms)
  })
}

//asynchronous function

 
  playButtonDiv.onclick = async () => {
    
    for(let box = 0; box < boxArray.length; box++){
      let currentBox = document.querySelector(`#box${boxArray[box]}`);
      
    currentBox.classList.add("color");
    await sleep(500);
  
    currentBox.classList.remove("color");
    await sleep(500);
  } 
 
}
  

const userInputArray= [];

console.log(userInputArray);



for(let i = 1; i < 6; i++){
  document.querySelector(`#box${i}`).onclick = () => {
    document.querySelector(`#box${i}`).classList.add("color-green");
    userInputArray.push(i);
    console.log(userInputArray);
    }
  

}

  



