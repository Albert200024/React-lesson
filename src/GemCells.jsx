import GameSymbol from "./GaneSymbol"
import './Game.css'

export default function GameCells ({isWinner, onClick, symbol, symbol_O, symbol_X}) {


    return (
             <button     
               onClick={onClick} 
               className={`cells ${isWinner ? 'cell--win' : 'cell'}`}
               >
                  { symbol  ? <GameSymbol symbol={symbol} SYMBOL_O={symbol_O} SYMBOL_X={symbol_X}/> : null }
            </button>                     
    )
  }