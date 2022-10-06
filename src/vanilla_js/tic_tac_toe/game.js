const restartDiv = document.querySelector("#restart-button");
const playerNameDiv = document.querySelector("#player-name");
const winnerDiv = document.querySelector("#winner-name");

let vals = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]

let currentPlayer = "X";
let winner = "";

const updateUI = () => {
  for (let i = 0; i < vals.length; i++) {
    for (let j = 0; j < vals[i].length; j++) {
      document.querySelector(`#box${i}${j}`).innerText = vals[i][j];
    }
  }
  
  playerNameDiv.innerText = currentPlayer;
  winnerDiv.innerText = winner;
}

const handleBoxClick = (row, column) => {

  if (!vals[row][column] && !winner) {
    vals[row][column] = currentPlayer;

    if (vals[row][0] === vals[row][1] && vals[row][1] === vals[row][2]) {
      winner = currentPlayer;
    }
    else if (vals[0][column] === vals[1][column] && vals[1][column] === vals[2][column]) {
      winner = currentPlayer;
    }
    else if (vals[1][1] && vals[0][0] === vals[1][1] && vals[1][1] === vals[2][2]){
      winner = currentPlayer;
    }
    else if(vals[1][1] && vals[0][2] === vals[1][1] && vals[1][1] === vals[2][0]){
      winner = currentPlayer;
    }
  
    if (currentPlayer === "X") {
      currentPlayer = "O";
    }
    else {
      currentPlayer = "X";
    }
  }
  updateUI();
}

const restart = restartDiv.onclick = () => {
  currentPlayer = "X";
  winner = "";
  vals = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]
updateUI();
}

for (let i = 0; i < vals.length; i++) {
  for (let j = 0; j < vals[i].length; j++) {
    document.querySelector(`#box${i}${j}`).onclick = () => handleBoxClick(i, j);
  }
}
