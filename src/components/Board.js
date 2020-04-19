import React, { Component } from 'react';
import Square from './Square';
import {disableScroll} from './EventListeners';

class Board extends Component {

    renderSquare(i){
        return <Square key={i} value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)}/>
    }



    render() {
        disableScroll();
        var size = 64;
        var sqRt = Math.sqrt(size)
        const full_board = []
        for(var i = 0;i < sqRt; i++){
            const row = [];
            for(var x =0;x < sqRt;x++){
                row.push(this.renderSquare((i*sqRt)+x));
            }
            full_board.push(<div className="board-row" key={i}>{row}</div>);
        }

        return (
            <div className="board">
            {full_board}
            </div>
  )
    }
}

export default Board;