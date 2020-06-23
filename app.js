let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let rock = document.getElementById("rock");
let humanScore = document.getElementById("humanScore");
let compScore = document.getElementById("compScore");

let computerNum;
let playerNum;
let playerScore = 0;
let computerScore = 0;

function userPaper() {
  playerNum = 1;
  computerNum = Math.floor(Math.random() * 3 + 1);
  if (computerNum == playerNum) {
    console.log("draw");
  } else if (playerNum == 1 && computerNum == 3) {
    playerScore++;
    humanScore.innerHTML = playerScore;
    console.log("you won");
  } else if (playerNum == 1 && computerNum == 2) {
    computerScore++;
    compScore.innerHTML = computerScore;
    console.log("you lose");
  }
  console.log(playerNum);
  console.log(computerNum);
}

function userScissors() {
  playerNum = 2;
  computerNum = Math.floor(Math.random() * 3 + 1);
  if (playerNum == 2 && computerNum == 2) {
    console.log("draw");
  } else if (playerNum == 2 && computerNum == 1) {
    playerScore++;
    humanScore.innerHTML = playerScore;
    console.log("you won");
  } else if (playerNum == 2 && computerNum == 3) {
    computerScore++;
    compScore.innerHTML = computerScore;
    console.log("you lose");
  }
  console.log(playerNum);
  console.log(computerNum);
}

function userRock() {
  playerNum = 3;
  computerNum = Math.floor(Math.random() * 3 + 1);
  if (playerNum == 3 && computerNum == 3) {
    console.log("draw");
  } else if (playerNum == 3 && computerNum == 2) {
    playerScore++;
    humanScore.innerHTML = playerScore;
    console.log("you won");
  } else if (playerNum == 3 && computerNum == 1) {
    computerScore++;
    compScore.innerHTML = computerScore;
    console.log("you lose");
  }
  console.log(playerNum);
  console.log(computerNum);
}

paper.addEventListener("click", userPaper);
scissors.addEventListener("click", userScissors);
rock.addEventListener("click", userRock);
