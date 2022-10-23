import { useState } from 'react'
import Playerbuttons from './components/Playerbuttons';

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);

  function handlePlayerButton(value) {
    setPlayerChoice(value);
  }


  return (
    <div className='app-container'>
      <Playerbuttons handleClick={handlePlayerButton}/>
    </div>
  )
}

export default App
