import { useState, useEffect } from "react";

const InteractionPanel = () => {
    const [command, setCommand] = useState("");
    const [coordinates, setCoordinates] = useState({});
    const [warning, setWarning] = useState("");

    useEffect(() => {
        initializeRoverCoordinates();
    }, []);

    async function initializeRoverCoordinates(){
        const response = await fetch(
            `https://marsroverapi.herokuapp.com/initialize`
        );

        const jsonValue = await response.json();
        
        setCoordinates({x: jsonValue[0], y: jsonValue[1], heading: jsonValue[2], isStopped: ""});
    }

    async function moveRover() {
        const response = await fetch(
            `https://marsroverapi.herokuapp.com/moverover/${command}`
        );

        const jsonValue = await response.json();

        if(jsonValue.length === 1) // in case the returned value is an error
            setWarning(jsonValue)
        else{
            setWarning(""); 
            setCoordinates({x: jsonValue[0], y: jsonValue[1], heading: jsonValue[2], isStopped: jsonValue[3]});
        }
    }

    return(
        <div>
            <h1>Welcome to Mars Rover!</h1>
            <h2>Move rover on mars</h2>

            <div className="instructions">
                Type a sequence of the following instructions:
                <ul>
                    <li>F: Move forward on current heading</li>
                    <li>B: Move backwards on current heading</li>
                    <li>L: Rotate left by 90 degrees</li>
                    <li>R: Rotate right by 90 degrees</li>
                </ul>
            </div>

            <input type="text" 
                   placeholder="Enter movement command"
                   id="commandText"
                   value={command}
                   onChange={(e) => setCommand(e.target.value)}/>
                    
            <button onClick={(e) => {
                moveRover();
                }}>Execute
            </button>

            <div className="result">
                {`Position of Rover now is: (${coordinates.x}, ${coordinates.y}) ${coordinates.heading} ${coordinates.isStopped}`}
            </div>

            <div className="warning">
                {`${warning}`}
            </div>
        </div>
    );
}

export default InteractionPanel;