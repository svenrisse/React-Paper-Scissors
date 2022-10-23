import { useState, useEffect } from "react";
import Playerbuttons from "./components/Playerbuttons";

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [score, setScore] = useState({
    won: 0,
    lost: 0,
    drawn: 0,
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
            won: prevScore.won + 1
          }
        })
        break
      case "ScissorsScissors":
      case "RockRock":
      case "PaperPaper":
        setScore(prevScore => {
          return {
            ...prevScore,
            drawn: prevScore.drawn + 1
          }
        })
        break
      case "ScissorsRock":
      case "RockPaper":
      case "PaperScissors":
        setScore(prevScore => {
          return {
            ...prevScore,
            lost: prevScore.lost + 1
          }
        })
        break
    }
  }, [computerChoice, playerChoice])

  return (
    <div className="app-container">
      <Playerbuttons handleClick={handlePlayerButton} />
      <div>Player choice : {playerChoice}</div>
      <div>Computer Choice : {computerChoice}</div>
      <div>Won: {score.won} </div>
      <div>Lost: {score.lost} </div>
      <div>Drawn: {score.drawn} </div>
    </div>
  );
}

export default App;
