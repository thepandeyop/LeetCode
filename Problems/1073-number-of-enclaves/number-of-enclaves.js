/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    const dir = [
        [1, 0], [-1, 0], [0, 1], [0, -1]
    ];
    const n = grid.length;
    const m = grid[0].length;
    const vis = Array.from({ length: n }, () => Array(m).fill(0));
    
    const q = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i === 0 || j === 0 || i === n - 1 || j === m - 1) {
                if (grid[i][j] === 1) {
                    q.push([i, j]);
                    vis[i][j] = 1;
                }
            }
        }
    }
    
    while (q.length) {
        let [i, j] = q.shift();
        for (const [di, dj] of dir) {
            const ni = i + di;
            const nj = j + dj;
            if (0 <= ni && ni < n && 0 <= nj && nj < m && vis[ni][nj] === 0 && grid[ni][nj] === 1) {
                vis[ni][nj] = 1;
                q.push([ni, nj]);
            }
        }
    }
    
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (vis[i][j] === 0 && grid[i][j] === 1) {
                count++;
            }
        }
    }
    return count;
};
