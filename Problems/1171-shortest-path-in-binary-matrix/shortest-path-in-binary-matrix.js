/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
     const n = grid.length; // Number of rows in the grid
        const m = grid[0].length; // Number of columns in the grid
        const dis = new Array(n).fill(null).map(() => new Array(m).fill(Number.MAX_VALUE)); // Initialize distance array

        const q = []; // Queue for BFS traversal
        if (grid[0][0] === 1) { // If the source cell contains 1, return -1 (indicating unreachable)
            return -1;
        }
        q.push({ i: 0, j: 0, d: 1 }); // Add the source cell to the queue with distance 1

        // Arrays for getting new cells in 8 directions (up, down, left, right, and diagonals)
        const ii = [-1, 1, 0, 0, -1, -1, 1, 1];
        const jj = [0, 0, -1, 1, -1, 1, -1, 1];

        while (q.length > 0) { // While the queue is not empty
            const p = q.shift(); // Dequeue the front element from the queue
            const i = p.i; // Current row index
            const j = p.j; // Current column index
            const d = p.d; // Distance travelled so far

            if (i === n - 1 && j === m - 1) { // If we reach the destination cell
                return d; // Return the distance travelled
            }

            // Explore all 8 directions from the current cell
            for (let k = 0; k < 8; k++) {
                const ni = i + ii[k]; // New row index
                const nj = j + jj[k]; // New column index

                // Check if the new cell is within bounds, not blocked, and has a shorter distance
                if (ni >= 0 && ni < n && nj >= 0 && nj < m && grid[ni][nj] === 0 && (1 + d < dis[ni][nj])) {
                    dis[ni][nj] = 1 + d; // Update the distance to the new cell
                    q.push({ i: ni, j: nj, d: 1 + d }); // Add the new cell to the queue with updated distance

                    if (ni === n - 1 && nj === m - 1) { // If the new cell is the destination cell
                        return dis[ni][nj]; // Return the updated distance to the destination cell
                    }
                }
            }
        }
        return -1; // Return -1 if the destination cell is unreachable
    
};