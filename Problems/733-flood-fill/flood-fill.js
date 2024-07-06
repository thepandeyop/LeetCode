/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
function dfs(image, row, col, color, oldColor) {
    if (row >= image.length || col >= image[0].length || row < 0 || col < 0 || image[row][col] !== oldColor) return;
    image[row][col] = color;
    dfs(image, row - 1, col, color, oldColor);
    dfs(image, row + 1, col, color, oldColor);
    dfs(image, row, col - 1, color, oldColor);
    dfs(image, row, col + 1, color, oldColor);
}

var floodFill = function(image, sr, sc, color) {
    if (color === image[sr][sc]) return image;
    
    let oldColor = image[sr][sc];
    dfs(image, sr, sc, color, oldColor);
    return image;
};