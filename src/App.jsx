import { useState } from 'react'

function App() {

  const [playerChoice, setPlayerChoice] = useState(null);

  function handlePlayerButton(value) {
    setPlayerChoice(value);
  }


  return (
    <div>
      <button onClick={handlePlayerButton("rock")}>Rock</button>
      <button onClick={handlePlayerButton("rock")}>Rock</button>
      <button onClick={handlePlayerButton("rock")}>Rock</button>
    </div>
  )
}

export default App
