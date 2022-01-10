function computerPlay() {
  let randomInt = getRandomInt(3);
  if (randomInt == 0) {
    return "Rock";
  } else if (randomInt == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function playRound(computerSelection, playerSelection) {
  let playerPick = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
  let computerPick = computerSelection;
  let result = document.querySelector(".result");

  if (playerPick == "Rock") {
    switch(computerPick) {
      case "Rock":
        receivesPoints = "None"
        result.textContent = "It's a draw.";
        break;
      case "Paper":
        receivesPoints = "Computer";
        result.textContent = `Point for me! ${computerPick} beats ${playerPick}.`;
        break;
      case "Scissors":
        receivesPoints = "Player";
        result.textContent = `Point for you! ${playerPick} beats ${computerPick}.`;
        break;
    }
  }
  if (playerPick == "Paper") {
    switch(computerPick) {
      case "Rock":
        receivesPoints = "Player";
        result.textContent = `Point for you! ${playerPick} beats ${computerPick}.`;
        break;
      case "Paper":
        receivesPoints = "None";
        result.textContent = "It's a draw.";
        break;
      case "Scissors":
        receivesPoints = "Computer";
        result.textContent = `Point for me! ${computerPick} beats ${playerPick}.`;
        break;
    }
  }
  if (playerPick == "Scissors") {
    switch(computerPick) {
      case "Rock":
        receivesPoints = "Computer";
        result.textContent = `Point for me! ${computerPick} beats ${playerPick}.`;
        break;
      case "Paper":
        receivesPoints = "Player";
        result.textContent = `Point for you! ${playerPick} beats ${computerPick}.`;
        break;
      case "Scissors":
        receivesPoints = "None";
        result.textContent = "It's a draw.";
        break;
    }
  }
}

let plyrPoints = 0;
let compPoints = 0;
let receivesPoints = "";
let winner = "";

function updateScore() {
  let plyrScore = document.querySelector(".plyr-score");
  let compScore = document.querySelector(".comp-score");
  if (receivesPoints == "Player") {
    plyrPoints++;
    plyrScore.textContent = `Player: ${plyrPoints}`;
  } else if (receivesPoints == "Computer") {
    compPoints++;
    compScore.textContent = `Computer: ${compPoints}`;
  }
}

function updateWinner() {
  if (plyrPoints == 5 || compPoints == 5) {
    if (plyrPoints == 5) {
      winner = "Player";
      document.querySelector(".result").textContent = "Congratulations! You won!";
    } else {
      winner = "Computer";
      document.querySelector(".result").textContent = "Better luck next time! You lose!";
    }
  }
}

const btns = document.querySelectorAll(".btn");
btns.forEach(btn => btn.addEventListener("click", function(e) {
  if (winner == "") {
    playRound(computerPlay(),e.target.textContent);
    updateScore();
    updateWinner();
  } else {
    alert("Please refresh the page for another game.")
  }
}));