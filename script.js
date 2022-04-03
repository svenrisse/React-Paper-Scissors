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
                document.getElementById("computerScore").innerHTML = "Computer Score: " + lost;
                break;
            case "scissors":
                won++;
                document.getElementById("result").innerHTML = "Won! Rock beats Scissors!";
                document.getElementById("playerScore").innerHTML = "Player Score: " + won;
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
                document.getElementById("computerScore").innerHTML = "Computer Score: " + lost;
                break;
            case "rock":
                won++;
                document.getElementById("result").innerHTML = "Won! Paper beats Rock!";
                document.getElementById("playerScore").innerHTML = "Player Score: " + won;
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
                document.getElementById("computerScore").innerHTML = "Computer Score: " + lost;
                break;
            case "paper":
                won++;
                document.getElementById("result").innerHTML = "Won! Scissors beats Paper!";
                document.getElementById("playerScore").innerHTML = "Player Score: " + won;
                break;
        }
    }

    /* Quit game and announce winner after either party reaches a score of 5 */

    if (won >= 5) {
        alert("You won! Click OK to play another round!");
        won = 0;
        lost = 0;
        document.getElementById("computerScore").innerHTML = "Computer Score: " + lost;
        document.getElementById("playerScore").innerHTML = "Player Score: " + won;
        
    } else if (lost >= 5) {
        alert("You lost! Click OK to play another round!");
        won = 0;
        lost = 0;
        document.getElementById("computerScore").innerHTML = "Computer Score: " + lost;
        document.getElementById("playerScore").innerHTML = "Player Score: " + won;
    }
}








