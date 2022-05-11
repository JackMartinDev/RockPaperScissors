let score = [0, 0, 0]; //Wins, Loses, Draws

const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const rockButton = document.getElementById("rock");
let winner = document.createElement("p");

let results = document.querySelector("p");

paperButton.addEventListener("click", () => {
  play("Paper", computerPlay());
  results.textContent = `Wins: ${score[0]} Loses: ${score[1]} Draws: ${score[2]}`;
});

scissorsButton.addEventListener("click", () => {
  play("Scissors", computerPlay());
  results.textContent = `Wins: ${score[0]} Loses: ${score[1]} Draws: ${score[2]}`;
});

rockButton.addEventListener("click", () => {
  play("Rock", computerPlay());
  results.textContent = `Wins: ${score[0]} Loses: ${score[1]} Draws: ${score[2]}`;
});

function computerPlay() {
  let computerMove;
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      computerMove = "Scissors";
      break;
    case 1:
      computerMove = "Paper";
      break;
    case 2:
      computerMove = "Rock";
      break;
  }
  return computerMove;
}

function play(playerMove, computerMove) {
  if (playerMove == computerMove) {
    score[2]++;
  } else if (
    (playerMove == "Scissors" && computerMove == "Paper") ||
    (playerMove == "Rock" && computerMove == "Scissors") ||
    (playerMove == "Paper" && computerMove == "Rock")
  ) {
    score[0]++;
    if (score[0] == 5) {
      winner.textContent = "You Win!";
      document.body.appendChild(winner);
      disableButtons();
    }
  } else if (
    (computerMove == "Scissors" && playerMove == "Paper") ||
    (computerMove == "Rock" && playerMove == "Scissors") ||
    (computerMove == "Paper" && playerMove == "Rock")
  ) {
    score[1]++;
    if (score[1] == 5) {
      winner.textContent = "You Lose!";
      document.body.appendChild(winner);
      disableButtons();
    }
  }
}

function disableButtons() {
  paperButton.disabled = true;
  scissorsButton.disabled = true;
  rockButton.disabled = true;
}

function game(rounds) {
  for (let i = 0; i < rounds; i++) {
    let computerMove = computerPlay();
    /*
    let playerMove = prompt("Scissors, Paper, Rock?");

    while (
      playerMove != "Scissors" &&
      playerMove != "Paper" &&
      playerMove != "Rock"
    ) {
      playerMove = prompt("Enter a valid move! Scissors, Paper, Rock?");
    }

    console.log(play(playerMove, computerMove));
    */
  }
}

game(5);
console.log(`Wins: ${score[0]} Loses: ${score[1]} Draws: ${score[2]}`);
