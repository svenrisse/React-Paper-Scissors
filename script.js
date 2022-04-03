let won = 0;
let lost = 0;
let drawn = 0;

/* Function to let computer choose a random option out of "rock" "paper" or "scissors" */

function computerPlay() {
    let options = ["rock","paper","scissors"];
    let randomOption = options[Math.floor(Math.random() * options.length )];
    return randomOption;
}

/* Buttons */

const rockbtn = document.querySelector("#rock");
rockbtn.addEventListener("click", () => {
    playRound("rock",computerPlay());
})
const paperbtn = document.querySelector("#paper");
paperbtn.addEventListener("click", () => {
    playRound("paper",computerPlay());
})

const scissorsbtn = document.querySelector("#scissors");
scissorsbtn.addEventListener("click", () => {
    playRound("scissors",computerPlay());
})

/* function to play 1 round and return the result of that round played */

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "rock") {
        switch(computerSelection) {
            case "rock":
                drawn++;
                console.log("Draw! You both have chosen Rock!");
                break; 
            case "paper":
                lost++;
                console.log("Lost! Paper beats Rock!");
                break;
            case "scissors":
                won++;
                console.log("Won! Rock beats Scissors!");
                break;
        }
    }
    if (playerSelection === "paper") {
        switch(computerSelection) {
            case "paper":
                drawn++;
                console.log("Drawn! You both have chosen Paper!");
                break;
            case "scissors":
                lost++;
                console.log("Lost! Scissors beats Paper!");
                break;
            case "rock":
                won++;
                console.log("Won! Paper beats rock!");
                break;
        }
    }
    if (playerSelection === "scissors") {
        switch(computerSelection) {
            case "scissors":
                drawn++;
                console.log("Drawn! You both have chosen Scissors!");
                break;
            case "rock":
                lost++;
                console.log("Lost! Rock beats scissors!");
                break;
            case "paper":
                won++;
                console.log("Won! Scissors beats Paper!");
                break;
        }
    }
}






