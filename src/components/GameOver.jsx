export default function GameOver({winner,onrestart}){
    return (
    <div id ="game-over">
        <h2>Game over</h2>
        {winner &&<p>{winner} won</p>}
        {!winner &&<p>DRAW!!</p>}
        <p>
        <button onClick={onrestart}>rematch</button>
        </p>
    </div>
    );
}