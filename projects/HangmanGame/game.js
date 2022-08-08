const playDiv = document.querySelector("#play");
const wordDiv = document.querySelector("#word");
const resultDiv = document.querySelector("#result");
let eventHandlerArray = [];

let circleCount = 1;
playDiv.onclick = async () => {
  const resultedWord = await fetch("https://puzzle.mead.io/puzzle?wordCount=1")
    .then(response => response.json())
    .then(response => response.puzzle)

  wordDiv.innerHTML = "";
  circleCount = 1;

  for (let i = 1; i <= 16; i++) {
    let circleDiv = document.querySelector(`#circle${i}`)
    console.log(circleDiv);
    circleDiv.innerText = "";
    circleDiv.classList.remove("background-red");
  }
  resultDiv.innerText = "";

  for (let i = 0; i < eventHandlerArray.length; i++) {
    document.removeEventListener('keydown', eventHandlerArray[i]);
  }

  eventHandlerArray = [];

  const charArray = resultedWord.toUpperCase().split("");

  for (let i = 0; i < charArray.length; i++) {
    let charDiv = document.createElement("div");
    charDiv.innerText = "";
    charDiv.classList.add("char-blank-input", "text-center");

    wordDiv.appendChild(charDiv);

    const eventHandler = (e) => {
      console.log(resultedWord, i);
      const capitalChar = e.key.toUpperCase();
      if (capitalChar === charArray[i]) {
        charDiv.innerText = capitalChar;
      }

      if (i === 0) {
        if (!charArray.includes(capitalChar) && circleCount <= 16) {
          document.querySelector(`#circle${circleCount}`).innerText = capitalChar;
          document.querySelector(`#circle${circleCount}`).classList.add("text-center", "background-red");

          if (!charArray.includes(capitalChar) && circleCount === 16) {
            resultDiv.innerText = "you lost";
          }
          circleCount++;
        }
        // if(circleCount !== 16){
        //   for(let i = 0; i < charArray.length; i++ ){
        //     if(charArray[i] === document.querySelector("#word:nth-child(i)").innerText);

        //   }
        //resultDiv.innerText = "you won";
      }
      // else if(!charArray.includes(capitalChar) && document.querySelector("#circle15").innerText === capitalChar){
      //   resultDiv.innerText = "you lost";
      // }
      // else {
      //   resultDiv.innerText = "you won";
      // }
    }
    document.addEventListener("keydown", eventHandler);

    eventHandlerArray.push(eventHandler);
  }
}
