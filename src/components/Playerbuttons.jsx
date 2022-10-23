import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";
import "./Playerbuttons.css";

function Playerbuttons(props) {
  return (
    <div className="symbol-container">
      <div className="symbol" id="rock">
        <img src={rock} onClick={() => props.handleClick("rock")}></img>
      </div>
      <div className="symbol" id="paper">
        <img src={paper} onClick={() => props.handleClick("paper")}></img>
      </div>
      <div className="symbol" id="scissors">
        <img src={scissors} onClick={() => props.handleClick("scissors")}></img>
      </div>
    </div>
  );
}

export default Playerbuttons;
