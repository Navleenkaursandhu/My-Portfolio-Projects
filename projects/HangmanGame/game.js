const playDiv = document.querySelector("#play");
const wordDiv = document.querySelector("#word");

// const fetchWordJSON = async() => {
// const response = await fetch(" https://puzzle.mead.io/puzzle?wordCount=1");
// const word = await response.json();
// return word["puzzle"];
// }

//console.log(fetchWordJSON());

playDiv.onclick = async () => {
  const resultedWord = await fetch("https://puzzle.mead.io/puzzle?wordCount=1")
    .then(response => response.json())
    .then(response => response.puzzle)

    wordDiv.innerHTML = "";
  //wordDiv.innerText = resultedWord["puzzle"];
  const charArray = resultedWord.split("");
  //wordDiv.innerText = charArray;
  for (let i = 0; i < charArray.length; i++) {
    let charDiv = document.createElement("div");
    console.log(charDiv);

    charDiv.innerText = charArray[i];
    //charDiv.innerText = "";
    charDiv.classList.add("char-blank-input");
    console.log(charDiv);
    wordDiv.appendChild(charDiv);
    
  }
  
}

