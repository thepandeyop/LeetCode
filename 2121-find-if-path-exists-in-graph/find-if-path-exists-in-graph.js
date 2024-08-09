/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let map = new Map();
    
    let visited = new Array(n).fill(false);
    
     for(let i =0;i<n; i++){
         map.set(i,[]);
     }
    
    // populate the adjacency list with edges;
    
    for(let [u,v] of edges)
    {
        map.get(u).push(v);
        map.get(v).push(u)
    }
    
    // create dfs 
const dfs = (node)=> {
   if(node ===destination) return true;
    
    visited[node] = true;
    
    for(let i of map.get(node)){
        if(!visited[i]){
        if(dfs(i)) return true; 
        }
    }
    return false;
}

return dfs(source);
    
};