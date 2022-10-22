function Playerbutton(props) {

    return (
        <button onClick={() => props.handleClick(props.choice)}>{props.choice}</button>
    )
}

export default Playerbutton