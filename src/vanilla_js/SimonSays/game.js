let showingAnimation = false;
let usersTurn = false;

const array = [1, 2, 3, 4, 5];

let boxArray = [...array].sort((a, b) => {
  return 0.5 - Math.random();
})

const sleep = (ms) => {
  return new Promise((resolve) => {
    return setTimeout(resolve, ms)
  })
}

document.querySelector("#play-button").onclick = async () => {

  if (!usersTurn && !showingAnimation) {
    for (let i = 1; i <= 5; i++) {
      document.querySelector(`#box${i}`).classList.remove("color-green", "color-red");
    }

    x = 0;

    boxArray = [...array].sort((a, b) => {
      return 0.5 - Math.random();
    })

    showingAnimation = true;
    if (showingAnimation){
      document.querySelector("#title").innerText = "Watch😀"
    }

    for (let box = 0; box < boxArray.length; box++) {
      let currentBox = document.querySelector(`#box${boxArray[box]}`);

      currentBox.classList.add("color-blue");
      await sleep(500);

      currentBox.classList.remove("color-blue");
      await sleep(500);
    }

    document.querySelector("#title").innerText = "Now Your Turn!😊";

    showingAnimation = false;
    usersTurn = true;
  }
}

let x = 0;
for (let i = 1; i <= 5; i++) {
  document.querySelector(`#box${i}`).onclick = () => {

    if (!showingAnimation && usersTurn) {
      if (boxArray[x] === i) {
        document.querySelector(`#box${i}`).classList.add("color-green");
        x++;
        if (x === 5) {
          document.querySelector("#title").innerText = "You Win🎉";
          usersTurn = false;
        }
      }
      else {
        document.querySelector(`#box${i}`).classList.add("color-red");
        document.querySelector("#title").innerText = "Oops!,You Lost👎,you may wanna try again🙂";
        usersTurn = false;
      }
    }
  }
}
