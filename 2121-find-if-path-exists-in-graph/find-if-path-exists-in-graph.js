/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
 let visited = {}; // visited object to track 
    let map = {};  // for mapping with adjecinecy matrix
    
    // adjency list 
    for(let i =0;i<n;i++){
        map[i] =[];
    }
    
    for(let e of edges){
        map[e[0]].push(e[1]);
        map[e[1]].push(e[0]);
    }
    const dfs = (curr)=>{
        if(curr===destination){
            return true;
        }
        visited[curr] = true; 
        
        let flag = false;
        
    for(let x of map[curr]){
        if(!(x in visited))
            flag = flag || dfs(x);
    }
        return flag;
    }
    return dfs(source);
};