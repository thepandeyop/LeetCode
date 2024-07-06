/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
     let row=matrix.length, col=matrix[0].length;

    for(let i=1; i<row; i++){
        for(let j=0; j<col;j++){
            matrix[i][j]+=Math.min(
                matrix[i-1][j], //element directly above
                (j>0)?matrix[i-1][j-1]:Infinity,//element diagonally left 
                (j<col-1)?matrix[i-1][j+1]:Infinity//element diagonally right
            )
        }
    }
 return Math.min(...matrix[row-1]) //minimum value in the last row,  
};