/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count =0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]=='1'){
                dfsfill(grid,i,j);
                count++;
        }
    
    }
    }
        return count
};
    
    var dfsfill = function(grid,i,j){
        if(i>=0 && j>=0 && i<grid.length && j<grid[0].length && grid[i][j]=='1'){
            grid[i][j]= '0';
            dfsfill(grid,i+1,j);
            dfsfill(grid,i-1,j);
            dfsfill(grid,i,j+1);
            dfsfill(grid,i,j-1);
        }
    }