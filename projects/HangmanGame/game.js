const playDiv = document.querySelector("#play");
const wordDiv = document.querySelector("#word");

// playDiv.onclick = async () => {
//   const resultedWord = await fetch("https://puzzle.mead.io/puzzle?wordCount=1")
//     .then(response => response.json())
//     .then(response => response.puzzle)

//     wordDiv.innerHTML = "";

//   const charArray = resultedWord.toUpperCase().split("");

//   for (let i = 0; i < charArray.length; i++) {
//     let charDiv = document.createElement("div");
//     console.log(charDiv);

//     charDiv.innerText = charArray[i];
//     //charDiv.innerText = "";
//     charDiv.classList.add("char-blank-input");
//     console.log(charDiv);
//     wordDiv.appendChild(charDiv);
//   }
// }


//charArray = ["B", "L", "O", "W","H","O","L","E"]


let circleCount = 1; 
playDiv.onclick = async () => {
  const resultedWord = await fetch("https://puzzle.mead.io/puzzle?wordCount=1")
    .then(response => response.json())
    .then(response => response.puzzle)

  wordDiv.innerHTML = "";

  const charArray = resultedWord.toUpperCase().split("");

  for (let i = 0; i < charArray.length; i++) {
    let charDiv = document.createElement("div");

    //charDiv.innerText = charArray[i];
    charDiv.innerText = "";
    charDiv.classList.add("char-blank-input");

    wordDiv.appendChild(charDiv);

    const eventHandler = (e) => {
      //console.log(e);
      const capitalChar = e.key.toUpperCase();
      if (capitalChar === charArray[i]) {
        charDiv.innerText = capitalChar;
      } 
      
      if(i === 0){
        if(!charArray.includes(capitalChar) && circleCount <=16){
          document.querySelector(`#circle${circleCount}`).innerText = capitalChar;
          circleCount++;
        }
      }
      
      // if (e.key !== charArray[i]) {
      //   console.log("not in word");
      // }
    };
    document.addEventListener("keydown", eventHandler);
    //document.removeEventListener('keydown', eventHandler)


  }
}
