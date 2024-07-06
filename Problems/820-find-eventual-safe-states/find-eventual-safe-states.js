/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    const n =graph.length;
    const Indegree = new Array(n).fill(0);
    const adj = new Array(n).fill(0).map(()=>new Array());
    
    for(let i in graph){
        for(let node in graph[i]){
            adj[graph[i][node]].push(i);
            Indegree[i]++;
        }
    }
    const q = new Array();
    for(let i in graph){
        if(Indegree[i]==0){
            q.push(i);
        }
    }
    let safe = new Array(n).fill(false);
    
    while(q.length!==0){
        let node = q.shift();
        safe[node] = true;
        for(let i in adj[node]){
            const neigh = adj[node][i];
            Indegree[neigh]--;
            if(Indegree[neigh]===0){
            q.push(neigh);
            }
        }
    }
    
    const resNode = [];
    for(let i in graph) {
        if(safe[i]){
            resNode.push(i);
        }
    }
    return resNode;
};