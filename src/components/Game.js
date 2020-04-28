import React, { Component } from 'react';
import Board from './Board'
import {makeMove, checkMove, countTiles} from './Game_logic';
import {InvalidMove} from './notificationsSB';

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
            snackbaropen: false,
            blackCount: 2,
            whiteCount: 2,
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
        if(possMoves.length > 0){
            makeMove(squares,i,this.state.xIsNext,possMoves,this.state.boardSize);
            squares[i] = this.state.xIsNext ? 'X' : 'O';
            var counts = countTiles(squares, this.state.boardSize);
            this.setState({
                snackbaropen:false,
                history: history.concat({
                    squares: squares
            }),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
            blackCount: counts[0],
            whiteCount: counts[1]
            
            });
        } else {
            this.setState({
                snackbaropen:true
            })
        }
    }

    resetGame(){
        this.setState(new Game().state);
    }

    closeSnackBar(){
        this.setState({snackbaropen: false})
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const state = this.state.xIsNext ? 'Black' : 'White';
        return (
            <div>
                <div className="game menu">
                    <div className="board">
                        <div className="board-row">
                            <button className="square reset" onClick={() =>this.resetGame()}>
                                Reset Game
                            </button>
                            <button className="square black menu">{this.state.blackCount}</button>
                            <button className="square white menu">{this.state.whiteCount}</button>
                            <button className="square turn">Turn: {state}</button>
                        </div>
                    </div>
                </div>
                
                <div className="game">
                    <Board onClick={(i) => this.handleClick(i)}
                        squares={current.squares} />
                </div>
                <div>
                    <InvalidMove
                    snackbaropen = {this.state.snackbaropen}
                    close = {() => this.closeSnackBar()}
                    />
                </div>
            </div>
           
        );
    }
}

export default Game;