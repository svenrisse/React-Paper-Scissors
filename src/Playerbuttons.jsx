import rock from "./assets/rock.png";
import paper from "./assets/paper.png";
import scissors from "./assets/scissors.png";

function Playerbuttons(props) {

    return (
        <div>
            <img src={rock} onClick={() => props.handleClick("rock")}></img>
            <img src={paper} onClick={() => props.handleClick("paper")}></img>
            <img src={scissors} onClick={() => props.handleClick("scissors")}></img>
        </div>
        
    )
}

export default Playerbuttons