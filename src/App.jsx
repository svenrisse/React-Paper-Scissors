import { useState } from 'react'
import Playerbuttons from './components/Playerbuttons';

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);

  function handlePlayerButton(value) {
    console.log(value)
    setPlayerChoice(value);
  }


  return (
    <div>
      <Playerbuttons handleClick={handlePlayerButton}/>
    </div>
  )
}

export default App
