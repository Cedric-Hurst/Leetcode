/*

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/

var isValidSudoku = function(board) {
    for(let i = 0; i< 9; i++){
        let row = new Set();
        let col = new Set();
        let box = new Set();
        let rowI = 3*(parseInt(i/3));
        let colI = 3*(parseInt(i%3));
        for(let j = 0; j< 9; j++){
            if(board[i][j] !== '.' && row.has(board[i][j])) return false;
            row.add(board[i][j]);
            if(board[j][i] !== '.' && col.has(board[j][i])) return false;
            col.add(board[j][i]);
            if (board[rowI+parseInt(j/3)][colI+parseInt(j%3)] != '.' && box.has(board[rowI+parseInt(j/3)][colI+parseInt(j%3)])) return false;
            box.add(board[rowI+parseInt(j/3)][colI+parseInt(j%3)]);
        }
    }
    return true;
}