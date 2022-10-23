import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissors.png";
import { useState } from "react";
import "./Computersymbol.css"

export default function Computersymbol(props) {

  switch (props.computerSymbol) {
    case "Rock":
      return (
        <div className="app-computer_choice">
        Computer Choice : <img src={rock} alt="" />{" "}
        </div>
      )
    case "Paper":
      return (
        <div className="app-computer_choice">
        Computer Choice : <img src={paper} alt="" />{" "}
        </div>
      )
    case "Scissors":
      return (
        <div className="app-computer_choice">
        Computer Choice : <img src={scissors} alt="" />{" "}
        </div>
      )
  }
}
