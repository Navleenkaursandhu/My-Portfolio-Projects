const playDiv = document.querySelector("#play");
const wordDiv = document.querySelector("#word");

let eventHandlerArray = [];

let circleCount = 1;
playDiv.onclick = async () => {
  const resultedWord = await fetch("https://puzzle.mead.io/puzzle?wordCount=1")
    .then(response => response.json())
    .then(response => response.puzzle)

  wordDiv.innerHTML = "";

  for(let i = 0; i < eventHandlerArray.length; i++){
    document.removeEventListener('keydown', eventHandlerArray[i]);
  }
  
  eventHandlerArray = [];

  const charArray = resultedWord.toUpperCase().split("");

  for (let i = 0; i < charArray.length; i++) {
    let charDiv = document.createElement("div");
    charDiv.innerText = "";
    charDiv.classList.add("char-blank-input");

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
          circleCount++;
        }
      }
    };
    document.addEventListener("keydown", eventHandler);
    eventHandlerArray.push(eventHandler);
  }
}
