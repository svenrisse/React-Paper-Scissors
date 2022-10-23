import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";
import "./Playerbuttons.css";

function Playerbuttons(props) {
  return (
    <div className="symbol-container">
      <div className="symbol" id="rock" onClick={() => props.handleClick("Rock")}>
        <img src={rock}></img>
      </div>
      <div className="symbol" id="paper" onClick={() => props.handleClick("Paper")}>
        <img src={paper}></img>
      </div>
      <div className="symbol" id="scissors" onClick={() => props.handleClick("Scissors")}>
        <img src={scissors}></img>
      </div>
    </div>
  );
}

export default Playerbuttons;
