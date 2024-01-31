import GameSymbol from "./GaneSymbol"

import './Game.css'

export default function GameInfo ({isDraw, winnerSequare, currentStep, winnerSymol, symbol_O, symbol_X}) {
  if(isDraw){
    return (
        <div className='game-info'>
          Nichya
        </div>
    )
  }

  if(winnerSymol){
     return (
        <div className='game-info'>
           Papeditel: <GameSymbol symbol= {winnerSymol ?? winnerSequare}/>
        </div>
     )
  }

  return (
    <div className='game-info'>
        Xod: <GameSymbol symbol={currentStep}  SYMBOL_O={symbol_O} SYMBOL_X={symbol_X}/>
    </div>
  )
}