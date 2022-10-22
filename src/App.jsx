import { useState } from "react"

export default function App() {

  const [playerChoice, setPlayerChoice] = useState(null);

  function handleClick(choice) {
    setPlayerChoice(choice)
  }
  console.log(playerChoice)
  return (
    <div>
      <button onClick={() => handleClick("rock")}>Rock</button>
      <button onClick={() => handleClick("paper")}>Paper</button>
      <button onClick={() => handleClick("scissors")}>Scissors</button>
    </div>
  )
}