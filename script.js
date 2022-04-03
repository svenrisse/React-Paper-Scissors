let won = 0;
let lost = 0;
let drawn = 0;

function computerPlay() {
    let options = ["rock","paper","scissors"];
    let randomOption = options[Math.floor(Math.random() * options.length )];
    return randomOption;
}

function playRound(playerSelection, computerSelection) {
    /* Rock */
    if (playerSelection == "rock" && computerSelection == "rock") {
        drawn++;
        return ("Draw! You both have chosen Rock!") ;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        lost++;
        return "You Lost! Paper beats Rock!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        won++;
        return "You won! Rock beats Scissors!";
    }
    /* Paper */
    if (playerSelection == "paper" && computerSelection == "paper") {
        drawn++;
        return "Draw! You both have chosen Paper!"; 
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        lost++;
        return "You lost! Scissors beats Paper!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        won++;
        return "You won! Paper beats Rock!";
    }
    /*Scissors*/
    if (playerSelection == "scissors" && computerSelection == "scissors") {
        drawn++;
        return "Draw! You both have chosen Scissors!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        lost++;
        return "You lost! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        won++;
        return "You won! Scissors beats Paper!";
    }
}

function playerInput() {
    let input = prompt("What do you play?");
    let playerSelection = input.toLowerCase();
    return playerSelection;
}
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = playerInput();
        let computerSelection = computerPlay();

        console.log(playRound(playerSelection,computerSelection));
    }

    if (won > lost) {
        console.log("You won the game with a score of: " + won + ":" + lost + " , " + drawn + " rounds were drawn");
    } else if (won > lost) {
        console.log("You lost the game with a score of: " + lost + ":" + won + " , " + drawn + " rounds were drawn");
    } else {
        console.log("The game was drawn!");
    }
    
}

game();
