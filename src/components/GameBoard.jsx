
export default function GameBoard({onselectsquare,board}){
 
//const[gameBoard,setgameBoard]=useState(IntialGameBoard);

//function HandleSelectSquare(rowIndex, colIndex){
  //  setgameBoard((prevGameBoard)=>
      //  {
    //    const updatedBoard=[...prevGameBoard.map(innerArray=>[...innerArray])];
        //updatedBoard[rowIndex][colIndex]=activeplayersymbol;
        //return updatedBoard;
   // });
    //onselectsquare();

return(<ol id="game-board">
{board.map((row,rowIndex)=>
<li key={rowIndex}>
<ol>
{row.map((PlayerSymbol,colIndex)=>
<li key={colIndex}>
<button onClick={()=>onselectsquare(rowIndex,colIndex)} disabled={PlayerSymbol!==null}>
    {PlayerSymbol}</button></li>)}  
</ol>

</li>)} 
    </ol>
    );
}