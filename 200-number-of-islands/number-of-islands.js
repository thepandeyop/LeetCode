/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid.length)
        return 0
    let cnt = 0, row = grid.length, col = grid[0].length
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == '1') {
                cnt++
                helper(grid, i, j)
            }
        }
    }
    return cnt
};

const helper = function (grid, row, col) {
    if (row < 0 || row == grid.length || col < 0 || col == grid[0].length || grid[row][col] == '0')
        return
    grid[row].splice(col, 1, '0')
    helper(grid, row - 1, col)
    helper(grid, row + 1, col)
    helper(grid, row, col - 1)
    helper(grid, row, col + 1)
}