function getComputerChoice() {
    random = Math.random();
    if (random < 1/3) {
        return "rock";
    } else if (random < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    choice = prompt("Select rock, paper or scissors: ");
    return choice;
}

humanScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice) { 
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("It's a tie!");
        } else if (computerChoice === "scissors") {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        } else {
            computerChoice++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "paper") {
            console.log("It's a tie!");
        } else if (computerChoice === "rock") {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        } else {
            computerChoice++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        }
    } else {
        if (computerChoice === "scissors") {
            console.log("It's a tie!");
        } else if (computerChoice === "paper") {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        } else {
            computerChoice++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        }
    }
}

