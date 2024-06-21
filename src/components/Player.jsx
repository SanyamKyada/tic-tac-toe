import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName }) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditName = () => {
        setIsEditing(x => !x);
        if(isEditing){
            onChangeName(symbol, playerName);
        }
    }

    const handleNameChange = (event) => {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing 
                    ?   <input type="text" value={playerName} onChange={handleNameChange} required/>
                    :   <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditName}>{isEditing ? 'Save' :'Edit'}</button>
        </li>
    );
}