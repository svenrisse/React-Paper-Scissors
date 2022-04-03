let won = 0;
let lost = 0;
let drawn = 0;

/* Function to let computer choose a random option out of "rock" "paper" or "scissors" */

function computerPlay() {
    let options = ["rock","paper","scissors"];
    let randomOption = options[Math.floor(Math.random() * options.length )];
    return randomOption;
}

/* function to play 1 round and return the result of that round played */

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "rock") {
        switch(computerSelection) {
            case "rock":
                drawn++;
                return "Draw! You both have chosen Rock!";
            case "paper":
                lost++;
                return "Lost! Paper beats Rock!";
            case "scissors":
                won++;
                return "Won! Rock beats Scissors!";
        }
    }
    if (playerSelection === "paper") {
        switch(computerSelection) {
            case "paper":
                drawn++;
                return "Drawn! You both have chosen Paper!";
            case "scissors":
                lost++;
                return "Lost! Scissors beats Paper!";
            case "rock":
                won++;
                return "Won! Paper beats rock!";
        }
    }
    if (playerSelection === "scissors") {
        switch(computerSelection) {
            case "scissors":
                drawn++;
                return "Drawn! You both have chosen Scissors!";
            case "rock":
                lost++;
                return "Lost! Rock beats scissors!";
            case "paper":
                won++;
                return "Won! Scissors beats Paper!";
        }
    }
}






