// Global starting variables
let playerScore = 0;
let computerScore = 0;
const gameChoice = ["Rock", "Paper", "Scissors"];

// Function to get the computer's choice
function getComputerChoice() {
    const computerChoiceIndex = Math.floor(Math.random() * 3);
    return gameChoice[computerChoiceIndex];
}

// Function to get the user's choice
function getUserChoice() {
    const userInput = prompt("What is your choice? Rock, Paper, or Scissors");
    if (!userInput) {
        alert("Invalid input. Please enter Rock, Paper, or Scissors.");
        return getUserChoice();
    }

    const userInputLower = userInput.toLowerCase();
    if (userInputLower === "rock" || userInputLower === "paper" || userInputLower === "scissors") {
        return userInputLower.charAt(0).toUpperCase() + userInputLower.slice(1);
    } else {
        alert("Invalid input. Please enter Rock, Paper, or Scissors.");
        return getUserChoice();
    }
}

// Function to determine the game result
function gameResult(user, computer) {
    console.log(`The computer's choice is: ${computer}`);
    console.log(`The user's choice is: ${user}`);
    
    if (user === computer) {
        console.log("It's a tie!");
    } else if (
        (user === "Rock" && computer === "Scissors") ||
        (user === "Paper" && computer === "Rock") ||
        (user === "Scissors" && computer === "Paper")
    ) {
        playerScore++;
        console.log("You win this round!");
    } else {
        computerScore++;
        console.log("Computer wins this round!");
    }

    console.log(`User Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
}

function playGame (){
       while (playerScore <5 && computerScore <5){
        const userChoice =getUserChoice();
        const computerChoice = getComputerChoice();
        gameResult(userChoice,computerChoice);
       } 
       if (playerScore === 5) {
        console.log(`The player has won the game!`)
       } else if (computerScore === 5) {
        console.log(`The computer has won the game!`)
 }
}
playGame();