import { useState, useEffect } from "react";
import Playerbuttons from "./components/Playerbuttons";

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [score, setScore] = useState({
    won: 0,
    lost: 0,
    message: "Choose your symbol!"
  });

  function handlePlayerButton(value) {
    setPlayerChoice(value);
    computerOption();
  }

  function computerOption() {
    let options = ["Rock", "Paper", "Scissors"];
    let randomOption = options[Math.floor(Math.random() * options.length)];
    setComputerChoice(randomOption);
  }

  useEffect(() => {
    switch (playerChoice + computerChoice) {
      case "ScissorsPaper":
      case "RockScissors":
      case "PaperRock":
        setScore(prevScore => {
          return {
            ...prevScore,
            won: prevScore.won + 1,
            message: `${playerChoice} beats ${computerChoice}. You won!`
          }
        })
        break
      case "ScissorsScissors":
      case "RockRock":
      case "PaperPaper":
        setScore(prevScore => {
          return {
            ...prevScore,
            message: `You both chose ${playerChoice}. It's a draw!`
          }
        })
        break
      case "ScissorsRock":
      case "RockPaper":
      case "PaperScissors":
        setScore(prevScore => {
          return {
            ...prevScore,
            lost: prevScore.lost + 1,
            message: `${playerChoice} loses against ${computerChoice}. You lost!`
          }
        })
        break
    }
  }, [computerChoice, playerChoice])

  return (
    <div className="app-container">
      <h1>Rock Paper Scissors</h1>
      <div className="app-computer_choice">Computer Choice : {computerChoice}</div>
      <div className="app-score">Won: {score.won} Lost: {score.lost}</div>
      <div className="app-score_message">{score.message}</div>
      <Playerbuttons handleClick={handlePlayerButton} />
    </div>
  );
}

export default App;
