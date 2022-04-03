function computerPlay() {
    let options = ["Rock","Paper","Scissors"];
    let randomOption = options[Math.floor(Math.random() * options.length )];
    return randomOption;
}

console.log(computerPlay());
