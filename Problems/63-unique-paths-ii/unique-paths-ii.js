/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let matrix = obstacleGrid;
    let row = matrix.length;
    let column = matrix[0].length;
    
    if(matrix.length===0 || matrix[0][0]===1 || matrix[row-1][column-1]===1 ) return 0;
    
    for(let i=0;i<row;i++) {
        for(let j=0;j<column;j++){
            if(matrix[i][j]===1) {
                 matrix[i][j]=0;  
            }
            else if(i==0 && j===0) {
                          matrix[i][j]=1;  
            }
else {
    let up =0;
    let left =0;
    if(i>0) {
     up = matrix[i-1][j]
    }
    if(j>0){
        left = matrix[i][j-1];
    }
    matrix[i][j] = up + left;
}
             
        }
        
    }
    return obstacleGrid[row-1][column -1];
};