let playerScore = 0;
let comScore = 0;
let res = "";

function resetScore() {
  playerScore = 0;
  comScore = 0;
  res = "The game has been reset";
}

function getComputerChoice() {
  // when invoke the fn will return Rock or Paper or Scissors
  let choice = "";

  //random number {1, 2, 3} generate
  let rand = Math.floor(Math.random() * 4);

  if (rand === 1) {
    choice = "ROCK";
  } else if (rand === 2) {
    choice = "PAPER";
  } else {
    choice = "SCISSORS";
  }
  return choice;
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  const result = document.querySelector(".result");
  const pScore = document.querySelector(".pScore");
  const coScore = document.querySelector(".coScore");

  // take in two string argument and format string with toUpperCase()
  playerSelection = playerSelection.toUpperCase();
  res = "";
  // compare the string and print the result
  
  if (playerSelection == "RESET") {
    resetScore();
    result.textContent = res;
    pScore.textContent = "You: " + playerScore;
    coScore.textContent = "Com: " + comScore;
    return;
  } else if (playerSelection == "ROCK") {
    if (computerSelection == "PAPER") {
      res = "You lose! Computer chose PAPER";
      comScore++;
    } else if (computerSelection == "SCISSORS") {
      res = "You win! Computer chose SCISSORS";
      playerScore++;
    } else {
      res = "Draw! Both chose ROCK";
    }
  } else if (playerSelection == "PAPER") {
    if (computerSelection == "PAPER") {
      res = "Draw! Both chose PAPER";
    } else if (computerSelection == "SCISSORS") {
      res = "You lose! Computer chose SCISSORS";
      comScore++;
    } else {
      res = "You win! Computer chose ROCK";
      playerScore++;
    }
  } else {
    // player chose scissors
    if (computerSelection == "PAPER") {
      res = "You win! Computer chose PAPER";
      playerScore++;
    } else if (computerSelection == "SCISSORS") {
      res = "Draw! Both chose SCISSORS";
    } else {
      res = "You lose! Computer chose ROCK";
      comScore++;
    }
  }
  if (playerScore == 5 || comScore == 5) {
    if (playerScore > comScore) {
      alert("You win overall!!");
    } else if (playerScore == comScore) {
      alert("Draw!");
    } else {
      alert("You lose overall!!");
    }
    resetScore();
  }
  // if player click reset, the game will reset

  result.textContent = res;
  pScore.textContent = "You: " + playerScore;
  coScore.textContent = "Com: " + comScore;
}

// player click button choosing move => a round is finish => score was kept
// play until score of any go to 5 =>

const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    playRound(btn.value);
  });
});
