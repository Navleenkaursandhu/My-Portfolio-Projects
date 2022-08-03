const eatingSound = new Audio("sounds/eat.mp3");
const endGameSound = new Audio("sounds/endGame.mp3");
const moveSound = new Audio("sounds/move.mp3");
const backgroundSound = new Audio("sounds/sound.mp3");

const groundDiv = document.querySelector("#ground");
const scoreDiv = document.querySelector("#enter-score");
const slowButton = document.querySelector("#slow-btn");
const mediumButton = document.querySelector("#medium-btn");
const fastButton = document.querySelector("#fast-btn");
const resetDiv = document.querySelector("#reset");

let direction = { x: 0, y: 0 };
let snakeArr = [{ x: 13, y: 15 }];
let food = { x: 10, y: 15 };
let lastPaintTime = 0;
let score = 0;

let speed = 2;
slowButton.onclick = () => {
  speed = 2;
}

mediumButton.onclick = () => {
  speed = 5;
}

fastButton.onclick = () => {
  speed = 8;
}

function main(currentTime) {
  window.requestAnimationFrame(main);
  if ((currentTime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = currentTime;
  gameEngine();
}

function collision(snake) {
  //if snake strikes any element of itself
  for (let i = 1; i < snakeArr.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      return true;
    }
  }

  //if snake strikes the wall it will collide
  if (snake[0].x >= 20 || snake[0].x <= 0 || snake[0].y >= 20 || snake[0].y <= 0) {
    return true;
  }
  return false;
}

function gameEngine() {
  //updating snake array and food
  if (collision(snakeArr)) {
    endGameSound.play();
    backgroundSound.pause();
    direction = { x: 0, y: 0 };
    alert("Game Over, Press any key to play again!");
    snakeArr = [{ x: 13, y: 15 }];
    backgroundSound.play();
    score = 0;
  }

  //if snakes eats food increase the snake length, increment score and add new random food
  if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
    score = score + 1;
    scoreDiv.innerText = score;
    eatingSound.play();
    snakeArr.unshift({ x: snakeArr[0].x + direction.x, y: snakeArr[0].y + direction.y });

    let a = 3;
    let b = 17;
    food = { x: Math.round(Math.random() * (b - a) + a), y: Math.round(Math.random() * (b - a) + a) }

  }

  //moving snake
  for (let i = snakeArr.length - 2; i >= 0; i--) {
    snakeArr[i + 1] = { ...snakeArr[i] };
  }

  snakeArr[0].x = snakeArr[0].x + direction.x;
  snakeArr[0].y = snakeArr[0].y + direction.y;

  //display snake 
  ground.innerHTML = "";
  snakeArr.forEach((object, index) => {
    let snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = object.y;
    snakeElement.style.gridColumnStart = object.x;

    if (index === 0) {
      snakeElement.classList.add("head")
    }
    else {
      snakeElement.classList.add("snake");
    }

    groundDiv.appendChild(snakeElement);
  })

  //display food
  snakeArr.forEach(() => {
    let foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    groundDiv.appendChild(foodElement);
  })

}

window.requestAnimationFrame(main);

window.addEventListener("keydown", (event) => {
  backgroundSound.play();
  direction = { x: 0, y: 1 };
  moveSound.play();

  switch (event.key) {
    case "ArrowUp":
      console.log("up");
      direction.x = 0;
      direction.y = -1;
      break;

    case "ArrowDown":
      console.log("down");
      direction.x = 0;
      direction.y = 1;
      break;

    case "ArrowLeft":
      console.log("left");
      direction.x = -1;
      direction.y = 0;
      break;

    case "ArrowRight":
      console.log("right");
      direction.x = 1;
      direction.y = 0
      break;

    default:
      break;
  }
})
