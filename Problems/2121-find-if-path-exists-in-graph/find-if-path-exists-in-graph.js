/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    if (source == destination)
            return true;
 
        const V = n;

        adj = new Array();
        for (var i = 0; i < V; i++)
            adj.push(new Array());
        
        for(let i=0; i<edges.length; i++){
            adj[edges[i][0]].push(edges[i][1]);
            adj[edges[i][1]].push(edges[i][0]);
        }

        // Mark all the vertices as not visited
        var visited = new Array(V).fill(false);
         
 
        // Create a queue for BFS
        var queue = new Array();
 
        // Mark the current node as visited and enqueue it
        visited[source] = true;
        queue.push(source);
 
        while (queue.length != 0)
        {
         
            // Dequeue a vertex from queue and print it
            source = queue.pop();
 
            // Get all adjacent vertices of the dequeued vertex s
            // If a adjacent has not been visited, then mark it
            // visited and enqueue it
            
            for (var i = 0; i < adj[source].length; i++) {
 
                // If this adjacent node is the destination node,
                // then return true
                if (adj[source][i] == destination)
                    return true;
 
                // Else, continue to do BFS
                if (!visited[adj[source][i]]) {
                    visited[adj[source][i]] = true;
                    queue.push(adj[source][i]);
                }
            }
        }
 
        // If BFS is complete without visiting d
        return false;

};