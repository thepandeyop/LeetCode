/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {  
      const row = grid.length-1;
      const col = grid[0].length-1;
          
     for(let i= 0;i<= row;i++) {
         for(let j=0;j<= col; j++) {
             
             if(i>0 && j>0)
                 {
                     grid[i][j] = Math.min (grid[i][j] + grid[i-1][j],
                                            grid[i][j]+ grid[i][j-1]);
                 }
                     else if (i>0 || j>0) 
                     {
                         if(j>0){
                             grid[i][j] += grid[i][j-1]; 
                         }
                         else {
                             grid[i][j] += grid[i-1][j];
                         }
                         
                     }
              
                 
         }
           
     }  
 return grid[row][col];
};