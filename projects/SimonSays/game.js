//on clicking PLAY random color box appear

const playButtonDiv = document.querySelector("#play-button");

const arrayBoxes = [box1Div, box2Div, box3Div, box4Div, box5Div];

const sleep = (ms) => {
  return new Promise((resolve) => {
    return setTimeout(resolve, ms)
  })
}

//asynchronous function

  
  playButtonDiv.onclick = async () => {
    
    const boxArray = [1,2,3,4,5];
    
    for(let box = 0; box < boxArray.length; box++){
      let currentBox = document.querySelector(`#box${boxArray[box]}`);
      
    currentBox.classList.add("color");
    await sleep(1000);
  
    currentBox.classList.remove("color");
    await sleep(1000);
  }
}







