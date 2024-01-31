import './Game.css'

export default function GameSymbol ({symbol, SYMBOL_O, SYMBOL_X}){
    console.log(symbol ,SYMBOL_O)
    const getSymbolClassName = (symbol) => {
        if(symbol === SYMBOL_O) return "symbol--o"
        if(symbol === SYMBOL_X) return "symbol--x"
        return ""
    }
    return <span className={`symbol ${getSymbolClassName(symbol)}`} >{symbol}</span>
}