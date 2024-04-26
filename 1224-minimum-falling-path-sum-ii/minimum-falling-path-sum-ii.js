/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function(grid) {
        const n = grid.length;

    // Iterate over each row starting from the second row
    for (let i = 1; i < n; i++) {
        // Iterate over each column of the current row
        for (let j = 0; j < n; j++) {
            // Find the minimum value from the previous row
            let minPrev = Infinity;
            for (let k = 0; k < n; k++) {
                if (k !== j) {
                    minPrev = Math.min(minPrev, grid[i - 1][k]);
                }
            }
            // Update the current element with the minimum sum
            grid[i][j] += minPrev;
        }
    }

    // Find the minimum sum in the last row of the grid
    let minSum = Infinity;
    for (let j = 0; j < n; j++) {
        minSum = Math.min(minSum, grid[n - 1][j]);
    }
    
    return minSum;
};