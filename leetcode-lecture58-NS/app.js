var solve = function(board) {
    for(let row = 0; row < board.length; row++){
        //col left
        if(board[row][0] === "O") markCells(board, row, 0)
        //col right
        const col = board[row].length-1
        if (board[row][col] === "O") markCells(board, row, col)
    }

    for(let col=0; col < board[0].length; col++){
        //row up
        if(board[0][col] === "O") markCells(board, 0, col)

        //row down
        const row = board.length-1
        if(board[row][col] === "O") markCells(board, row, col)
    }

    for(let i=0; i < board.length; i++){
        for(let j=0; j < board[i].length; j++){
            board[i][j] = board[i][j] === "m" ? "O" : "X"
        }
    }
};

function markCells(board, i, j){
    board[i][j] = "m"
    if(i > 0 && board[i-1][j] === "O"){
        markCells(board, i, j)
    }
    if(j < board[0].length - 1 && board[i][j+1] === "O"){
        markCells(board, i, j+1)
    }

    if(i < board.length-1 && board[i+1][j] === "O"){
        markCells(board, i+1, j)
    }

    if(j > 0 && board[i][j-1] === "O"){
        markCells(board, i, j-1)
    }
}