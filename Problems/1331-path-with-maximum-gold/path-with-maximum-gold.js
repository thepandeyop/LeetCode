/**
 * @param {number[][]} grid
 * @return {number}
 */
const getMaxForCell = (grid, row, col, total) => {
    if(!grid[row] || !grid[row][col]) {
        return total;
    }
    const swap = grid[row][col];
    grid[row][col] = 0;
    total += swap;
    const maxTotal = Math.max(
        getMaxForCell(grid, row - 1, col, total),
        getMaxForCell(grid, row + 1, col, total),
        getMaxForCell(grid, row, col - 1, total),
        getMaxForCell(grid, row, col + 1, total),
    );

    grid[row][col] = swap;
    return maxTotal;
}

const getMaximumGold = (grid) =>
     Math.max(...grid.map((row, i) => row.map((_, j) => getMaxForCell(grid, i, j, 0))).flat());