let score = [0, 0, 0]; //Wins, Loses, Draws

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
    return "Its a tie!";
  } else if (
    (playerMove == "Scissors" && computerMove == "Paper") ||
    (playerMove == "Rock" && computerMove == "Scissors") ||
    (playerMove == "Paper" && computerMove == "Rock")
  ) {
    score[0]++;
    return "You Win!";
  } else if (
    (computerMove == "Scissors" && playerMove == "Paper") ||
    (computerMove == "Rock" && playerMove == "Scissors") ||
    (computerMove == "Paper" && playerMove == "Rock")
  ) {
    score[1]++;
    return "You lose!";
  }
}

function game(rounds) {
  for (let i = 0; i < rounds; i++) {
    let computerMove = computerPlay();
    let playerMove = prompt("Scissors, Paper, Rock?");

    while (
      playerMove != "Scissors" &&
      playerMove != "Paper" &&
      playerMove != "Rock"
    ) {
      playerMove = prompt("Enter a valid move! Scissors, Paper, Rock?");
    }

    console.log(play(playerMove, computerMove));
  }
}

game(5);
console.log(`Wins: ${score[0]} Loses: ${score[1]} Draws: ${score[2]}`);
