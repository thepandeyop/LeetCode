/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
   if (!Array.isArray(matrix) || matrix.length === 0 || !Array.isArray(matrix[0])) {
        throw new Error("Invalid matrix");
    }

    const numRows = matrix.length;
    const numCols = matrix[0].length;
    let rowsToZero = new Array(numRows).fill(false);
    let colsToZero = new Array(numCols).fill(false);

    // First pass: identify rows and columns to be zeroed
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (matrix[i][j] === 0) {
                rowsToZero[i] = true;
                colsToZero[j] = true;
            }
        }
    }

    // Second pass: zero out rows
    for (let i = 0; i < numRows; i++) {
        if (rowsToZero[i]) {
            for (let j = 0; j < numCols; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    // Third pass: zero out columns
    for (let j = 0; j < numCols; j++) {
        if (colsToZero[j]) {
            for (let i = 0; i < numRows; i++) {
                matrix[i][j] = 0;
            }
        }
    }

    

};