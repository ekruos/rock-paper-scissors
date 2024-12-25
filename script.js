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

humanScore = 0;
computerScore = 0;
count = 0;

const body = document.querySelector("body");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
    count++;
    if (count === 5) {
        finalResult();
        addRefreashButton();
    }
});

paper.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
    count++;
    if (count === 5) {
        finalResult();
        addRefreashButton();
    }
});

scissors.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
    count++;
    if (count === 5) {
        finalResult();
        addRefreashButton();
    }
});

const situation = document.createElement("div");
const result = document.createElement("div");

situation.setAttribute("style", "color: rgb(51, 227, 227); font-size: 40px; text-align: center; margin-bottom: 50px;");

function finalResult() {
    body.appendChild(result);
    if (humanScore > computerScore) {
        result.textContent = (`You won the match ${humanScore}-${computerScore}!`);
        result.setAttribute("style", "font-size: 70px; text-align: center; color: green;");

    } else if (humanScore < computerScore) {
        result.textContent = (`You lost the match ${humanScore}-${computerScore}.`);
        result.setAttribute("style", "font-size: 70px; text-align: center; color: red;");
    } else {
        result.textContent = (`The match ended in a tie ${humanScore}-${computerScore}.`);
        result.setAttribute("style", "font-size: 70px; text-align: center; color: white;");
    }
}
function addRefreashButton() {
    const refreashContainer = document.createElement("div");
    refreashContainer.setAttribute("style", "display: flex; justify-content: center; align-items: center;")
    const refreash = document.createElement("button");
    body.appendChild(refreashContainer);
    refreashContainer.appendChild(refreash);
    refreash.textContent = "New match";
    refreash.setAttribute("style", "color: green; margin-top: 50px; display: flex; justify-content: center; align-items: center; width: 150px; height: 60px; background-color: yellow; border: solid 2px white; border-radius: 10px; font-size: 20px; font-weight: bold;");
    refreash.addEventListener("click", () => {
        location.reload();
    });

}



    /*
    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
        console.log(`Situation (you against the computer): ${humanScore}-${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log(`You won ${humanScore}-${computerScore}!`);
    } else if (humanScore < computerScore) {
        console.log(`You lost ${humanScore}-${computerScore} :(`);
    } else {
        console.log(`The game ended in a tie ${humanScore}-${computerScore}.`);
    }
    */

    function playRound(humanChoice, computerChoice) { 
        humanChoice = humanChoice.toLowerCase();
        body.appendChild(situation);
        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
                situation.textContent = "It's a tie.";
            } else if (computerChoice === "scissors") {
                humanScore++;
                situation.textContent = "You win! Rock beats scissors."
            } else {
                computerScore++;
                situation.textContent = "You lose. Rock loses to paper.";
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "paper") {
                situation.textContent = "It's a tie.";
            } else if (computerChoice === "rock") {
                humanScore++;
                situation.textContent = "You win! Paper beats rock.";
            } else {
                computerScore++;
                situation.textContent = "You lose. Paper loses to scissors.";
            }
        } else {
            if (computerChoice === "scissors") {
                situation.textContent = "It's a tie.";
            } else if (computerChoice === "paper") {
                humanScore++;
                situation.textContent = "You win! Scissors beats paper.";
            } else {
                computerScore++;
                situation.textContent = "You lose. Scissors loses to rock.";
            }
        }
    }
//}

//playGame();

