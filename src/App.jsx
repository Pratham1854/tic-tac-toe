import Player from "./components/player"
import GameBoard from "./components/GameBoard"
import Log from "./components/log"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./components/GameOver"
function derivedActiveplayer(gameturn){
  let currentplayer='X';
  
  if(gameturn.length>0 && gameturn[0].Player==='X'){
    currentplayer='O'
}
return currentplayer;
}

const IntialGameBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
];
function derivegameboard(gameturn){
  let gameBoard=[...IntialGameBoard.map(array=>[...array])];
  for(const turn of gameturn){
      const{square,Player}=turn;
      const{row,col}=square;
      gameBoard[row][col]=Player;
  }
  return gameBoard;
}
function derivewinner(gameBoard,players){
  let winner=null;
  for(const combination of WINNING_COMBINATIONS){
    const FirstSquareSymbol =gameBoard[combination[0].row][combination[0].column];
    const SecondSquareSymbol=gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].column];
  
  
    if(FirstSquareSymbol && FirstSquareSymbol===SecondSquareSymbol && FirstSquareSymbol===thirdSquareSymbol){
      winner=players[FirstSquareSymbol];
    }
  }
  return winner
}
function App() {
const[players,setsplayers]=useState({
  X:'PLAYER 1',
  O:'Player 2',
});
const [gameturn,setgameturns]=useState([])
const activePlayer =derivedActiveplayer(gameturn);
const gameBoard=derivegameboard(gameturn);
const winner=derivewinner(gameBoard,players);
const hasdraw=gameturn.length===9 &&!winner;
//const[activePlayer,setActivePlayer]=useState('X');
function HandleSelectSquare(rowIndex,colIndex){
//setActivePlayer((curractiveplayer)=>(curractiveplayer==='X'?'O':'X'));
setgameturns((prevturns)=>{
const currentplayer=derivedActiveplayer(prevturns);
const updturn=[
  {square:{row:rowIndex,col:colIndex},Player:currentplayer}
      ,...prevturns,
    ];
      return updturn;
  }
  )
}
function handlerestart(){
  setgameturns([]);
}
function handleplayernamechange(symbol,newname){
  setsplayers(prevplayer=>{
    return{
      ...prevplayer,
      [symbol]:newname
    }
  })
}
  return (
    <main>
      <div id='game-container'>
        <ol id='players' className="highlight-player">
          <Player Intialname="Player 1" symbol='X' isActive={activePlayer==='X'} onchangename={handleplayernamechange}/>
          <Player Intialname="Player 2" symbol='O'isActive={activePlayer==='O'}onchangename={handleplayernamechange}/>
        </ol>
        {(winner || hasdraw) && <GameOver winner={winner} onrestart={handlerestart}/>}
       <GameBoard onselectsquare={HandleSelectSquare} board={gameBoard}/>
      </div>
      <Log turns={gameturn}/>
    </main>
  )
}

export default App
