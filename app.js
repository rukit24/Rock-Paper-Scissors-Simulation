// Global starting variables
let playerScore = 0;
let computerScore = 0;
const playerScoreDom = document.getElementById("player-score");
const computerScoreDom = document.getElementById("computer-score");
const gameMessage = document.getElementById("game-message");
const roundCount = document.getElementById("round-count");
const chooseRock = document.getElementById("rock");
const choosePaper = document.getElementById("paper");
const chooseScissors = document.getElementById("scissors");
const gameChoice = ["Rock", "Paper", "Scissors"];
const maxRound = 15;

const handleChoice = (playerChoice) => {
    if (playerScore >= 5 || computerScore >= 5) {
        return; // Stop further game logic
      }
  const computerChoice = gameChoice[Math.floor(Math.random() * 3)];
  gameMessage.textContent = `You choose ${playerChoice} and the Computer choose ${computerChoice}.`;

  // Game Logic

  if (playerChoice === computerChoice) {
    gameMessage.innerHTML += `<br>It's a draw !!!`;
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    playerScore++;
    gameMessage.innerHTML += "<br>It's a win to you !!!";
  } else {
    computerScore++;
    gameMessage.innerHTML += "<br>You lose this round !!!";
  }
  playerScoreDom.textContent = playerScore;
  computerScoreDom.textContent = computerScore;
  const currentRound = parseInt(roundCount.textContent.split(" ")[1] || 0);
  roundCount.textContent = `Round ${currentRound + 1}`;
  if (playerScore === 5) {
    gameMessage.innerHTML =
      "<br><strong>You have won the game! Congratulations!!!</strong>";
      resetGame();
  } else if (computerScore === 5) {
    gameMessage.innerHTML =
      "<br><strong>You have lost the game! Try next time!!!</strong>";
      resetGame()
  }
};

function resetGame(){
        // Ensure the reset button exists only once
        if (!document.getElementById("reset")) {
            const resetBtn = document.createElement("div");
            resetBtn.classList.add("reset");
            resetBtn.id = "reset";
            resetBtn.innerHTML = `<h1>Reset The Game !!!</h1>`;
            document.body.appendChild(resetBtn);
      
            // Add event listener to reset the game
            resetBtn.addEventListener("click", () => {
              playerScore = 0;
              computerScore = 0;
              playerScoreDom.textContent = 0;
              computerScoreDom.textContent = 0;
              gameMessage.textContent = `The game is Start`;
              roundCount.textContent = `Round 1`;
      
              // Remove the reset button
              resetBtn.remove();
            });
          }    
}

chooseRock.addEventListener("click", () => handleChoice("Rock"));
choosePaper.addEventListener("click", () => handleChoice("Paper"));
chooseScissors.addEventListener("click", () => handleChoice("Scissors"));
