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
                document.getElementById("result").innerHTML = "Draw! You both have chosen Rock!";
                break; 
            case "paper":
                lost++;
                document.getElementById("result").innerHTML = "Lost! Rock loses to Paper!";
                break;
            case "scissors":
                won++;
                document.getElementById("result").innerHTML = "Won! Rock beats Scissors!";
                break;
        }
    }
    if (playerSelection === "paper") {
        switch(computerSelection) {
            case "paper":
                drawn++;
                document.getElementById("result").innerHTML = "Drawn! You both have chosen Paper!";
                break;
            case "scissors":
                lost++;
                document.getElementById("result").innerHTML = "Lost! Paper loses to Scissors!";
                break;
            case "rock":
                won++;
                document.getElementById("result").innerHTML = "Won! Paper beats Rock!";
                break;
        }
    }
    if (playerSelection === "scissors") {
        switch(computerSelection) {
            case "scissors":
                drawn++;
                document.getElementById("result").innerHTML = "Drawn! You both have chosen Scissors!";
                break;
            case "rock":
                lost++;
                document.getElementById("result").innerHTML = "Lost! Scissors lose to Rock!";
                break;
            case "paper":
                won++;
                document.getElementById("result").innerHTML = "Won! Scissors beats Paper!";
                break;
        }
    }
}








