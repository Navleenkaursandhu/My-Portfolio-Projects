const playDiv = document.querySelector("#play");
const wordDiv = document.querySelector("#word");
const resultDiv = document.querySelector("#result");
let eventHandlerArray = [];
let isPlayerPlaying = true;

let circleCount = 1;

playDiv.onclick = async () => {
  isPlayerPlaying = true;
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
      if (circleCount <= 16 && isPlayerPlaying) {
        const capitalChar = e.key.toUpperCase();
        if (capitalChar === charArray[i]) {
          charDiv.innerText = capitalChar;

          let playerHasWon = true;
          let arrayOfCharElem = document.querySelectorAll("#word > div ");
          for (let i = 0; i < charArray.length; i++) {
            if (charArray[i] !== arrayOfCharElem[i].innerText) {
              playerHasWon = false;
            }
          }
          if (playerHasWon) {
            resultDiv.innerText = "You Won:)";
            isPlayerPlaying = false;
          }
        }

        if (i === 0) {
          if (!charArray.includes(capitalChar) && circleCount <= 16) {
            document.querySelector(`#circle${circleCount}`).innerText = capitalChar;
            document.querySelector(`#circle${circleCount}`).classList.add("text-center", "background-red");

            if (!charArray.includes(capitalChar) && circleCount === 16) {
              resultDiv.innerText = "You Lost:(";
              isPlayerPlaying = false;
            }
            circleCount++;
          }
        }
      }
    }
    document.addEventListener("keydown", eventHandler);

    eventHandlerArray.push(eventHandler);
  }
}
