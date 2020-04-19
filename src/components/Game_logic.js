
// Consider changing the name to checkMove
export function checkMove(squares, tile, playersTurn, size) {
    var possMoves = [];
    // if(checkUp(squares, tile, playersTurn, size)){
    //     possMoves.push("up");
    // }
    // if(checkUpLeft(squares, tile, playersTurn, size)){
    //     possMoves.push("upLeft");
    // }
    // if(checkUpRight(squares, tile, playersTurn, size)){
    //     possMoves.push("upRight");
    // }
    // if(checkLeft(squares, tile, playersTurn, size)){
    //     possMoves.push("left");
    // }
    // if(checkRight(squares, tile, playersTurn, size)){
    //     possMoves.push("right");
    // }
    // if(checkDown(squares, tile, playersTurn, size)){
    //     possMoves.push("down");
    // }
    // if(checkDownLeft(squares, tile, playersTurn, size)){
    //     possMoves.push("downLeft");
    // }
    if(checkDownRight(squares, tile, playersTurn, size)){
        console.log("Down Right");
        possMoves.push("downRight");
    }

    return possMoves;

    
}
export function makeMove(squares, tile, playersTurn, moves, size) {
    try{
        if(moves.includes("up")){
            flipUp(squares, tile, playersTurn, size);
        }

        if(moves.includes("down")){
            flipDown(squares, tile, playersTurn, size);
        }
        if(moves.includes("left")){
            flipLeft(squares, tile, playersTurn, size);
        }
        if(moves.includes("right")){
            flipRight(squares, tile, playersTurn, size);
        }

    } catch(err){
        console.log("List of possible moves was empty. No more moves could be played");
    }
}
//Check all directions Up
function checkUp(squares, tile, playersTurn, size){
    var rowSize = Math.sqrt(size);
    var tile_count = 0;
    for(var count = tile-rowSize; count > 0; count = count - rowSize){
        if(playersTurn){
            if(squares[count] === "O"){
                tile_count = tile_count +1;
            } else if(squares[count] === "X"){
                if(tile_count > 0){
                    return true;
                } else {
                    break;
                }
            } else{
                break;
            }
        } else {
            if(squares[count] === "X"){
                tile_count = tile_count +1;
            } else if(squares[count] === "O"){
                if(tile_count > 0){
                    return true;
                } else {
                    break;
                }
            } else{
                break;
            }
        }
    };
    return false;
}
function checkUpLeft(squares, tile){
    return false;
}
function checkUpRight(squares, tile, playersTurn, size){
    return false;
}

// Flip all directions up
function flipUp(squares, tile, playersTurn, size){
    var rowSize = Math.sqrt(size);
    for(var count = tile - rowSize; count > 0; count = count - rowSize){
        if(playersTurn){
            if(squares[count] === "O"){
                squares[count] = "X";
            } else {
                break; 
            }
        } else {
            if(squares[count] === "X"){
                squares[count] = "O";
            } else {
                break; 
            }
        }
    };
}


function checkLeft(squares, tile, playersTurn, size){
    var rowSize = Math.sqrt(size);
    var row = Math.floor(tile/rowSize);
    var tile_count = 0;
    var tilesLeft = tile - (row * rowSize);
    for(tilesLeft; tilesLeft > 0; tilesLeft = tilesLeft -1){
        var sqIndex = tilesLeft+(rowSize*row)-1;
        if(playersTurn){
            if(squares[sqIndex] === "O"){
                tile_count = tile_count +1;
            } else if(squares[sqIndex] === "X"){
                if(tile_count > 0){
                    return true;
                } else {
                    break;
                }
            } else{
                break;
            }
        } else {
            if(squares[sqIndex] === "X"){
                tile_count = tile_count +1;
            } else if(squares[sqIndex] === "O"){
                if(tile_count > 0){
                    return true;
                } else {
                    break;
                }
            } else{
                break;
            }
        }
    }

    return false;
}
function checkRight(squares, tile, playersTurn, size){
    var rowSize = Math.sqrt(size);
    var row = Math.floor(tile/rowSize);
    var tile_count = 0;
    var tilesLeft = tile - (row * rowSize);
    for(tilesLeft; tilesLeft < rowSize-1; tilesLeft = tilesLeft + 1){
        var sqIndex = tilesLeft + (rowSize*row) + 1;
        console.log(tile_count); 
        if(playersTurn){
            if(squares[sqIndex] === "O"){
                tile_count = tile_count +1;
            } else if(squares[sqIndex] === "X"){
                if(tile_count > 0){
                    return true;
                } else {
                    break;
                }
            } else{
                break;
            }
        } else {
            if(squares[sqIndex] === "X"){
                tile_count = tile_count +1;
            } else if(squares[sqIndex] === "O"){
                if(tile_count > 0){
                    return true;
                } else {
                    break;
                }
            } else{
                break;
            }
        }
    }

    return false;
}
// Check all directions Down
function checkDown(squares, tile, playersTurn, size){
    var rowSize = Math.sqrt(size);
    var tile_count = 0;
    for(var count = tile + rowSize; count < size; count = count + rowSize){
        if(playersTurn){
            if(squares[count] === "O"){
                tile_count = tile_count +1;
            } else if(squares[count] === "X"){
                if(tile_count > 0){
                    return true;
                } 
            } else{
                break;
            }
        } else {
            if(squares[count] === "X"){
                tile_count = tile_count +1;
            } else if(squares[count] === "O"){
                if(tile_count > 0){
                    return true;
                } 
            } else{
                break;
            }
        }
    };
    return false;
}
function checkDownLeft(squares, tile, playersTurn, size){
    return false;
}
function checkDownRight(squares, tile, playersTurn, size){
    try{
        var rowSize = Math.sqrt(size);
        var tile_count = 0;
        for(var count = tile + rowSize; count < size; count = (count + rowSize) + 1){
            if(playersTurn){
                if(squares[count] === "O"){
                    tile_count = tile_count +1;
                } else if(squares[count] === "X"){
                    if(tile_count > 0){
                        return true;
                    } 
                } else{
                    break;
                }
            } else {
                if(squares[count] === "X"){
                    tile_count = tile_count +1;
                } else if(squares[count] === "O"){
                    if(tile_count > 0){
                        return true;
                    } 
                } else{
                    break;
                }
            }
        };
        return false;

    } catch(err){
        return false;
    }
}

function flipDown(squares, tile, playersTurn, size){
    var rowSize = Math.sqrt(size);
    for(var count = tile + rowSize; count < size; count = count + rowSize){
        if(playersTurn){
            if(squares[count] === "O"){
                squares[count] = "X";
            } else {
                break; 
            }
        } else {
            if(squares[count] === "X"){
                squares[count] = "O";
            } else {
                break; 
            }
        }
    };
}

function flipLeft(squares, tile, playersTurn, size){
    var rowSize = Math.sqrt(size);
    var row = Math.floor(tile/rowSize);
    var tilesLeft = tile - (row * rowSize);
    for(tilesLeft; tilesLeft > 0; tilesLeft = tilesLeft -1){
        var sqIndex = tilesLeft+(rowSize*row)-1;
        console.log(sqIndex);
        if(playersTurn){
            if(squares[sqIndex] === "O"){
                squares[sqIndex] = "X";
            } else{
                break;
            }
        } else {
            if(squares[sqIndex] === "X"){
                squares[sqIndex] = "O"
            } else{
                break;
            }
        }
    }
}

function flipRight(squares, tile, playersTurn, size){
    var rowSize = Math.sqrt(size);
    var row = Math.floor(tile/rowSize);
    var tilesLeft = tile - (row * rowSize);
    for(tilesLeft; tilesLeft < rowSize-1; tilesLeft = tilesLeft + 1){
        var sqIndex = tilesLeft + (rowSize*row) + 1;
        if(playersTurn){
            if(squares[sqIndex] === "O"){
                squares[sqIndex] = "X"
            } else{
                break;
            }
        } else {
            if(squares[sqIndex] === "X"){
                squares[sqIndex] = "O"
            } else{
                break;
            }
        }
    }
    return false;
}