import React, { useState } from 'react'

export default function GameBoard({onSelectSquare, board}) {
    // 'State lifted up'
    //         => When we require any state's value in two diff components,
    //            we should move  that state to the closest common ancestor.

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    // const handleSquareClick = (rowIndex, colIndex) => {
    //     console.log(rowIndex)
    //     setGameBoard((prevGameBoard) => {
    //         const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; // created an copy of array 'prevGameBoard'
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedGameBoard;
    //     });
    //     onSelectSquare();
    // }
    
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} 
                                disabled={playerSymbol !== null}>
                                    {playerSymbol}
                                </button>
                            </li>))}
                    </ol>
                </li>))}
        </ol>
    )
}
