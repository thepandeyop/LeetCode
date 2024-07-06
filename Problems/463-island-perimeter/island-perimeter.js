/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let ans = 0, n = grid.length, m = grid[0].length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) 
            if (grid[i][j]) {
                if (i * grid.at(i-1)[j] == 0)
                    ans += 2
                if (j * grid[i].at(j-1) == 0)
                    ans += 2
            }
    }
    return ans
};