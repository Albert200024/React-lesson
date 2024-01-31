import React from 'react';
import './Game.css'
import GameInfo from './GameInfo';
import GameCells from './GemCells';
import { useState, useEffect } from 'react';

const SYMBOL_X = "X"
const SYMBOL_O = "O"

const  gameWinner = (cells) => {
   const liners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
   ]

   for(let i=0; i < liners.length; i++) { 
     const [a, b, c] = liners[i]

    if(cells[a] && cells[a] === cells[b] && cells[a] === cells[c]){
      return [a, b, c]
      } 
   }
}

function useGameState(){
    const [cells, setCells] = React.useState([null, null, null, null, null, null, null, null, null])
    const [currentStep, setCurrentStep] = React.useState(SYMBOL_O);
    const [winnerSequare, setWinnerSequre] = React.useState();

    const handClick = (index) => {
       if(cells[index] || winnerSequare){
          alert("vandake lracraca")
          return
       }
      
       const cellsCopy = cells.slice();
       cellsCopy[index] = currentStep
       const winner = gameWinner(cellsCopy)

       setCells(cellsCopy);
       setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O)
       setWinnerSequre(winner)
    }    

    const resetGame = () => {
       const newCells = cells.map(elem => elem = null)
       setCells(newCells);
       setCurrentStep(SYMBOL_X);
       setWinnerSequre(undefined);
    }

    const winnerSymol = winnerSequare ? cells[winnerSequare[0]] : undefined 
    const isDraw = !winnerSequare && cells.filter(value => value).length == 9 

    return{
      cells,
      currentStep,
      winnerSequare,
      handClick,
      resetGame,
      winnerSymol,
      isDraw   
    }
}

export default function Game(){
    const {
      cells,
      currentStep,
      winnerSequare,
      handClick,
      resetGame,
      winnerSymol,
      isDraw 
     } = useGameState();

    return (
       <div className="game">
             <GameInfo isDraw={isDraw} 
                       winnerSequare = {winnerSequare} 
                       currentStep = {currentStep}    
                       winnerSymol = {winnerSymol}
                       symbol_O = {SYMBOL_O}
                       symbol_X = {SYMBOL_X}
             />
             <div className='game-field'>    
                {cells.map((symbol, index) => {
                   return (
                     <GameCells 
                        symbol_O = {SYMBOL_O}
                        symbol_X = {SYMBOL_X}
                        symbol = {symbol} 
                        isWinner= {winnerSequare?.includes(index)} 
                        onClick={() => handClick(index)}
                     />
                   )          
                })}
             </div>
             <button className='clear_btn' onClick={resetGame}>Clear</button>
       </div>
    )
}