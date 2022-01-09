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

function playerPlay() {
  return window.prompt("Rock, paper or scissors?");
}

function playRound(computerSelection, playerSelection) {
  let playerPick = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
  let computerPick = computerSelection;
  if (playerPick == "Rock") {
    switch(computerPick) {
      case "Rock":
        winner = "None"
        console.log("It's a draw.");
        break;
      case "Paper":
        winner = "Computer";
        console.log(`You lose! ${computerPick} beats ${playerPick}`);
        break;
      case "Scissors":
        winner = "Player";
        console.log(`You win! ${playerPick} beats ${computerPick}`);
        break;
    }
  }
  if (playerPick == "Paper") {
    switch(computerPick) {
      case "Rock":
        winner = "Player";
        console.log(`You win! ${playerPick} beats ${computerPick}`);
        break;
      case "Paper":
        winner = "None";
        console.log("It's a draw.");
        break;
      case "Scissors":
        winner = "Computer";
        console.log(`You lose! ${computerPick} beats ${playerPick}`);
        break;
    }
  }
  if (playerPick == "Scissors") {
    switch(computerPick) {
      case "Rock":
        winner = "Computer";
        console.log(`You lose! ${computerPick} beats ${playerPick}`);
        break;
      case "Paper":
        winner = "Player";
        console.log(`You win! ${playerPick} beats ${computerPick}`);
        break;
      case "Scissors":
        winner = "None";
        console.log("It's a draw.");
        break;
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let winner = "";
  for (let round = 0; round < 5; round++) {
    playRound(computerPlay(), playerPlay());
    if (winner == "Player") {
      playerScore++;
    } else {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    return "Congratulations, you won!";
  } else if (computerScore > playerScore) {
    return "Better luck next time, you lost!"
  } else {
    return "It's a draw!"
  }
}