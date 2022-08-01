const playerA_HealthBar_Container = document.querySelector("#player-a-info .health-bar");
const playerB_HealthBar_Container = document.querySelector("#player-b-info .health-bar");
const playerA_Health_Div = document.querySelector("#player-a-info .health");
const playerB_Health_Div = document.querySelector("#player-b-info .health");
const restart_Div = document.querySelector("#restart");
const playerA_Name_Div = document.querySelector("#player-a-info .player-name");
const playerB_Name_Div = document.querySelector("#player-b-info .player-name");
const currentRound_Div = document.querySelector("#current-round");
const totalRounds_Div = document.querySelector("#total-rounds");
const pointA = document.querySelector("#player-a-info .pointer");
const pointB = document.querySelector("#player-b-info .pointer");
const finalResult = document.querySelector("#result");

const updateUI = () => {
  playerA_Health_Div.innerText = playerA.health;
  playerB_Health_Div.innerText = playerB.health;
  playerA_Name_Div.innerText = playerA.name;
  playerB_Name_Div.innerText = playerB.name;
  currentRound_Div.innerText = game.round;
  playerA_HealthBar_Container.style.width = `${playerA.health}%`;
  playerB_HealthBar_Container.style.width = `${playerB.health}%`;

  if (game.isPlayerAPlaying) {
    pointA.classList.add('select');
    pointB.classList.remove('select');
  }
  else {
    pointB.classList.add('select');
    pointA.classList.remove('select');
  }

  if (game.round === 0) {
    pointA.classList.remove('select');
    pointB.classList.remove('select');
    finalResult.innerText = game.winner();
    document.querySelector("#winner").play();
  }
}

class Game {
  constructor(playerA, playerB, maxRound) {
    this.roundsAreDone = false;
    this.playerA = playerA;
    this.playerB = playerB;
    this.isPlayerAPlaying = true;
    this.round = maxRound;
    this.maxRound = maxRound;
  }

  restart() {
    this.playerA.reset();
    this.playerB.reset();
    this.round = this.maxRound;
    this.isPlayerAPlaying = true;
    this.roundsAreDone = false;
  }

  nextTurn() {
    if (this.isPlayerAPlaying) {
      this.isPlayerAPlaying = false;
    }
    else {
      this.isPlayerAPlaying = true;
      this.round--;
      if (this.round === 0) {
        this.roundsAreDone = true;
      }
    }
  }

  isOver() {
    return this.playerA.health <= 0 || this.playerB.health <= 0 || this.roundsAreDone;
  }

  winner() {
    if (this.playerA.health > this.playerB.health) {
      return "Player A Wins!";
    }
    else if (this.playerA.health < this.playerB.health) {
      return "Player B Wins!";
    }
    else {
      return "It's a Tie";
    }
  }
}

class Player {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  hit(enemy) {
    let randomDamage = Math.floor(Math.random() * (10) + 20)
    enemy.takeHit(randomDamage);
  }

  takeHit(damage) {
    this.health = this.health - damage;
  }

  lifeline() {
    if (this.health < 100) {
      let randomHealth = Math.ceil(Math.random() * 10);
      this.health = this.health + randomHealth;

      if (this.health > 100) {
        this.health = 100;
      }
    }
  }

  reset() {
    this.health = 100;
  }
}

const playerA = new Player("Player A", 100);
const playerB = new Player("Player B", 100);
const game = new Game(playerA, playerB, 3);

document.addEventListener("keydown", (event) => {
  if (!game.isOver() && game.isPlayerAPlaying && event.key === "a") {
    playerA.hit(playerB);
    game.nextTurn();
    updateUI();
    document.querySelector("#pAhit").play();
  }
})

document.addEventListener("keydown", (event) => {
  if (!game.isOver() && game.isPlayerAPlaying && event.key === "z") {
    playerA.lifeline();
    game.nextTurn();
    updateUI();
    document.querySelector("#pAlifeline").play();
  }
})

document.addEventListener("keydown", (event) => {
  if (!game.isOver() && !game.isPlayerAPlaying && event.key === "l") {
    playerB.hit(playerA);
    game.nextTurn();
    updateUI();
    document.querySelector("#pBhit").play();
  }
})

document.addEventListener("keydown", (event) => {
  if (!game.isOver() && !game.isPlayerAPlaying && event.key === "m") {
    playerB.lifeline();
    game.nextTurn();
    updateUI();
    document.querySelector("#pBlifeline").play();
  }
})

restart_Div.onclick = () => {
  pointA.classList.add('select');
  game.restart();

  finalResult.innerText = "LET'S PLAY AGAIN!";
  updateUI();
}

updateUI();
