//on clicking PLAY random color box appear

let isBlinking = true;

const playButtonDiv = document.querySelector("#play-button");

//getting random boxArray on hitting play button
const array = [1,2,3,4,5];

   const boxArray = array.sort((a,b) => {
     return 0.5 - Math.random();
   }) // [3,4,5,2,1]

   console.log(boxArray);


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
  
//storing user input in an array
const userInputArray= [];
let x = 0;

for(let i = 1; i <= 5; i++){
  document.querySelector(`#box${i}`).onclick = () => {
   
      if(boxArray[x] === i ){
        document.querySelector(`#box${i}`).classList.add("color-green");
        x++;
      }
      else{
        document.querySelector(`#box${i}`).classList.add("color-red");
      }
    
    
    }
    
  }


  



  
  
  





 




