import React, { Component } from 'react';
import Board from './Board'
import {makeMove, checkMove} from './Game_logic';

class Game extends Component {
    constructor(props) {
        super(props);
        var size = 64;
        var sqRt = Math.sqrt(64);
        var SqRtHalf = sqRt/2;
        var squareArray = Array(size).fill(" ")
        squareArray[(sqRt*(SqRtHalf-1))+SqRtHalf] = "O";
        squareArray[(sqRt*(SqRtHalf-1))+SqRtHalf-1] = "X";
        squareArray[(sqRt*SqRtHalf)+SqRtHalf] = "X";
        squareArray[(sqRt*SqRtHalf)+SqRtHalf-1] = "O";
        this.state = {
            boardSize: size,
            xIsNext: true,
            stepNumber: 0,
            history: [
                { squares: squareArray }
            ]
        }
    }
    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        var possMoves = checkMove(squares,i,this.state.xIsNext,this.state.boardSize);
        makeMove(squares,i,this.state.xIsNext,possMoves,this.state.boardSize);
        if(true){
            squares[i] = this.state.xIsNext ? 'X' : 'O';
            this.setState({
            history: history.concat({
                squares: squares
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });
        }
    }

    resetGame(){
        this.setState(new Game().state);
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        return (
            
            <div className="game">
                <button className="reset" onClick={() =>this.resetGame()}>
                    Reset Game
                </button>
                <Board onClick={(i) => this.handleClick(i)}
                    squares={current.squares} />
            </div>
        );
    }
}

export default Game;