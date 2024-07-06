/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let sum = 0;
    let row = matrix.length;
    let col = matrix[0].length;
    
    for(let i =0;i<row;i++){
        
        for(let j=0;j<col;j++){
            
            if(matrix[i][j]===1) {
            
                if(i>0 && j>0){
                matrix[i][j] += Math.min(matrix[i-1][j-1],matrix[i-1][j],matrix[i][j-1]);
            }   
                
                
            }
            sum += matrix[i][j];
            
            
        }
    }
    return sum;
};