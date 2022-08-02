

const restart_div = document.querySelector("#restart-button");

const vals = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]

const updateUI = () =>{
  //box00_div.innerText = vals[0][0];

}

const handleBoxClick = (row,column) => {
  console.log(row, column);
  vals[row][column] = 'X'

  updateUI();
}






for(let i = 0; i < vals.length; i++){
  for(let j = 0; j < vals[i].length; j++){
    document.querySelector(`#box${i}${j}`).onclick = () => handleBoxClick(i,j);
  }
}