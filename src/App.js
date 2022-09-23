import './App.css';
import {useState, useEffect} from 'react';
import Square from "./components/Square";
import { Patterns } from "./components/Patterns";

function App() {

  const [board, setBoard] = useState(["","","","","","","","",""]);
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({ winner:"none", state:"none" });

  useEffect(() => {
    checkWin();
    
      checkTie();
    
    if(player === "X"){
      setPlayer("O");
    }else{
      setPlayer("X");
    }
  }, [board]);

  useEffect(() => {
    if(result.state !== "none"){
      alert(`Game Finished! Winning Player is ${result.winner}`);
    }
  }, [result]);

  const checkTie = () => {
    let filled = true;
    board.forEach((itm) => {
      if(itm === ""){
        filled = false;
      }
    });

    if(filled){
      setResult({ winner: "No One", state: "Tie"});
      setBoard(["","","","","","","","",""]);
    }
  }

  const checkWin = ()=>{
    Patterns.forEach((pattern)=>{
      const firstPlayer = board[pattern[0]];
      if(firstPlayer === "") return;
      let foundWinPattern = true;
      pattern.forEach((idx)=>{
        if(board[idx] !== firstPlayer){
          foundWinPattern = false;
        }
      })

      if(foundWinPattern){
        // console.log("pattern found!");
        setResult({winner:player , state:"Won"});
        setBoard(["","","","","","","","",""]);
      }
      
    })
  };

  const chooseSquare = (square) => {
    setBoard(board.map((val, idx)=>{
      if(idx === square && val === "" ){
        return player;
      }
      return val;
    }));
    
    
  };

  return (
    <div className="App">
      <div className='board'>
        <div className='row'>
          <Square data={board[0]} chooseSquare={() => {chooseSquare(0)}} />
          <Square data={board[1]} chooseSquare={() => {chooseSquare(1)}} />
          <Square data={board[2]} chooseSquare={() => {chooseSquare(2)}} />
        </div>
        <div className='row'>
          <Square data={board[3]} chooseSquare={() => {chooseSquare(3)}} />
          <Square data={board[4]} chooseSquare={() => {chooseSquare(4)}} />
          <Square data={board[5]} chooseSquare={() => {chooseSquare(5)}} />
        </div>
        <div className='row'>
          <Square data={board[6]} chooseSquare={() => {chooseSquare(6)}} />
          <Square data={board[7]} chooseSquare={() => {chooseSquare(7)}} />
          <Square data={board[8]} chooseSquare={() => {chooseSquare(8)}} />
        </div>
      </div>
    </div>
  );
}

export default App;
