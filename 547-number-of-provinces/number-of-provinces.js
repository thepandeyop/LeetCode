/**
 * @param {number[][]} isConnected
 * @return {number}
 */
function dfs(matrix, visited, i) {
    visited[i] = true;  // Mark the current node as visited
    for (let j = 0; j < matrix.length; j++) {
        if (matrix[i][j] == 1 && visited[j] == false) {
            dfs(matrix, visited, j);  // Call DFS on the neighbor
        }
    }
}

var findCircleNum = function(isConnected) {
    let comp = isConnected.length;
    let vis = new Array(comp).fill(false);
    let count = 0;
    
    for (let i = 0; i < comp; i++) {
        if (vis[i] === false) {
            dfs(isConnected, vis, i);
            count++;
        }
    }
    return count;
};

