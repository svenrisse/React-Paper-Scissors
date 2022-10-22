import { useState } from 'react'
import Playerbutton from './Playerbutton';

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);

  function handlePlayerButton(value) {
    console.log(value)
    setPlayerChoice(value);
  }


  return (
    <div>
      <Playerbutton choice="Rock" handleClick={handlePlayerButton}/>
      <Playerbutton choice="Paper" handleClick={handlePlayerButton}/>
      <Playerbutton choice="Scissors" handleClick={handlePlayerButton}/>
    </div>
  )
}

export default App
