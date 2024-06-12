/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const rows = [0, board.length - 1];
    const columns = [0, board[0].length - 1];
    
    const dfs = function(board, i, j) {
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] !== "O") {
            return;
        }
        board[i][j] = "#";
        dfs(board, i + 1, j);
        dfs(board, i - 1, j);
        dfs(board, i, j + 1);
        dfs(board, i, j - 1);
    };
    
    // Check the first and last rows
    for (let row of rows) {
        for (let i = 0; i < board[0].length; i++) {
            if (board[row][i] === "O") {
                dfs(board, row, i);
            }
        }
    }
    
    // Check the first and last columns
    for (let i = 0; i < board.length; i++) {
        for (let col of columns) {
            if (board[i][col] === "O") {
                dfs(board, i, col);
            }
        }
    }
    
    // Convert remaining 'O' to 'X' and '#' back to 'O'
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === "#") {
                board[i][j] = "O";
            } else if (board[i][j] === "O") {
                board[i][j] = "X";
            }
        }
    }
};
