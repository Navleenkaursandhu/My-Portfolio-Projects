

const restart_div = document.querySelector("#restart-button");

const vals = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]

let currentPlayer = "X";

const updateUI = () => {
  for (let i = 0; i < vals.length; i++) {
    for (let j = 0; j < vals[i].length; j++) {
      document.querySelector(`#box${i}${j}`).innerText = vals[i][j];
    }
  }
}

const handleBoxClick = (row, column) => {

  if (!vals[row][column]) {
    vals[row][column] = currentPlayer;

    if (currentPlayer === "X") {
      currentPlayer = "O";
    }
    else {
      currentPlayer = "X";
    }
  }

  updateUI();
}






for (let i = 0; i < vals.length; i++) {
  for (let j = 0; j < vals[i].length; j++) {
    document.querySelector(`#box${i}${j}`).onclick = () => handleBoxClick(i, j);
  }
}