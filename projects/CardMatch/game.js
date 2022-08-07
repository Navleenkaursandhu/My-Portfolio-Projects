const cards = [
  { type: '♠', typeName: 'spades', color: 'black', num: '2' },
  { type: '♠', typeName: 'spades', color: 'black', num: '3' },
  { type: '♠', typeName: 'spades', color: 'black', num: '4' },
  { type: '♠', typeName: 'spades', color: 'black', num: '5' },
  { type: '♠', typeName: 'spades', color: 'black', num: '6' },
  { type: '♠', typeName: 'spades', color: 'black', num: '7' },
  { type: '♠', typeName: 'spades', color: 'black', num: '8' },
  { type: '♠', typeName: 'spades', color: 'black', num: '9' },
  { type: '♠', typeName: 'spades', color: 'black', num: '10' },
  { type: '♠', typeName: 'spades', color: 'black', num: 'J' },
  { type: '♠', typeName: 'spades', color: 'black', num: 'Q' },
  { type: '♠', typeName: 'spades', color: 'black', num: 'K' },
  { type: '♠', typeName: 'spades', color: 'black', num: 'A' },

  { type: '♣', typeName: 'club', color: 'black', num: '2' },
  { type: '♣', typeName: 'club', color: 'black', num: '3' },
  { type: '♣', typeName: 'club', color: 'black', num: '4' },
  { type: '♣', typeName: 'club', color: 'black', num: '5' },
  { type: '♣', typeName: 'club', color: 'black', num: '6' },
  { type: '♣', typeName: 'club', color: 'black', num: '7' },
  { type: '♣', typeName: 'club', color: 'black', num: '8' },
  { type: '♣', typeName: 'club', color: 'black', num: '9' },
  { type: '♣', typeName: 'club', color: 'black', num: '10' },
  { type: '♣', typeName: 'club', color: 'black', num: 'J' },
  { type: '♣', typeName: 'club', color: 'black', num: 'Q' },
  { type: '♣', typeName: 'club', color: 'black', num: 'K' },
  { type: '♣', typeName: 'club', color: 'black', num: 'A' },

  { type: '♥', typeName: 'hearts', color: 'red', num: '2' },
  { type: '♥', typeName: 'hearts', color: 'red', num: '3' },
  { type: '♥', typeName: 'hearts', color: 'red', num: '4' },
  { type: '♥', typeName: 'hearts', color: 'red', num: '5' },
  { type: '♥', typeName: 'hearts', color: 'red', num: '6' },
  { type: '♥', typeName: 'hearts', color: 'red', num: '7' },
  { type: '♥', typeName: 'hearts', color: 'red', num: '8' },
  { type: '♥', typeName: 'hearts', color: 'red', num: '9' },
  { type: '♥', typeName: 'hearts', color: 'red', num: '10' },
  { type: '♥', typeName: 'hearts', color: 'red', num: 'J' },
  { type: '♥', typeName: 'hearts', color: 'red', num: 'Q' },
  { type: '♥', typeName: 'hearts', color: 'red', num: 'K' },
  { type: '♥', typeName: 'hearts', color: 'red', num: 'A' },

  { type: '♦', typeName: 'diamond', color: 'red', num: '2' },
  { type: '♦', typeName: 'diamond', color: 'red', num: '3' },
  { type: '♦', typeName: 'diamond', color: 'red', num: '4' },
  { type: '♦', typeName: 'diamond', color: 'red', num: '5' },
  { type: '♦', typeName: 'diamond', color: 'red', num: '6' },
  { type: '♦', typeName: 'diamond', color: 'red', num: '7' },
  { type: '♦', typeName: 'diamond', color: 'red', num: '8' },
  { type: '♦', typeName: 'diamond', color: 'red', num: '9' },
  { type: '♦', typeName: 'diamond', color: 'red', num: '10' },
  { type: '♦', typeName: 'diamond', color: 'red', num: 'J' },
  { type: '♦', typeName: 'diamond', color: 'red', num: 'Q' },
  { type: '♦', typeName: 'diamond', color: 'red', num: 'K' },
  { type: '♦', typeName: 'diamond', color: 'red', num: 'A' },
];


const cardContainerDiv = document.querySelector("#card-container");
const restartBtnDiv = document.querySelector("#restart-button");

const setupNewGame = () => {
  let randomCardsArray = [...cards].sort((a, b) => {
    return 0.5 - Math.random();
  })
  cardContainerDiv.innerHTML = "";

  for (let i = 0; i < 52; i++) {
    let cardDiv = document.createElement("div");
    console.log(document.createElement("div"));
    cardDiv.classList.add("card");

    //id for each cardDiv
    cardDiv.setAttribute("id", `id${i}`);

    let cardShapeDiv = document.createElement("div");
    let numberDiv = document.createElement("div");

    cardDiv.style.color = randomCardsArray[i]["color"];

    cardShapeDiv.innerText = randomCardsArray[i]["type"];

    numberDiv.innerText = randomCardsArray[i]["num"];


    cardContainerDiv.appendChild(cardDiv);
    cardDiv.appendChild(numberDiv);
    cardDiv.appendChild(cardShapeDiv);


    cardDiv.classList.add("hidden-card");
  }

  let visibleCardDivArray = [];
  for (let i = 0; i < 52; i++) {
    let cardDivElement = document.querySelector(`#id${i}`)


    cardDivElement.onclick = () => {
      if (cardDivElement.classList.contains("hidden-card")) {
        visibleCardDivArray.push(cardDivElement);

        cardDivElement.classList.remove("hidden-card");

        if (visibleCardDivArray.length > 2) {
          let elementRemoved = visibleCardDivArray.shift();
          elementRemoved.classList.add("hidden-card");
        }

        if (visibleCardDivArray.length === 2) {
          let element0Color = visibleCardDivArray[0].style.color;
          let element1Color = visibleCardDivArray[1].style.color;
          
          let element0Char = visibleCardDivArray[0].querySelector(":nth-child(1)").innerText;
         
          let element1Char = visibleCardDivArray[1].querySelector(":nth-child(1)").innerText;

          let count = 0;
          if (element0Color === element1Color && element0Char === element1Char) {
            visibleCardDivArray[0].classList.add("background-color");
            visibleCardDivArray[1].classList.add("background-color");
            count = count +2;;
            document.querySelector("#no-of-cards-matched").innerText = count;
            visibleCardDivArray = [];
          }
        }
      }
    }
  }
}

restartBtnDiv.onclick = setupNewGame;
setupNewGame();
