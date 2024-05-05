var isBipartite = function(graph) {
    const n = graph.length
    let color = Array(n).fill("TRANSPARENT")

    for(let node = 0; node< n; node++){
        if (color[node] === "TRANSPARENT"){
            const q = []
            q.push(node)
            color[node] = "RED"
            while(q.length){
                const current = q.shift()
                for(let neighbor of graph[current]){
                    if( color[neighbor] === "TRANSPARENT"){
                        color[neighbor] = color[current] === "RED" ? 'BLUE' : "RED"
                        q.push(neighbor)
                    }
                    else if(color[neighbor] === color[current]) return false
                }
            }
        }
    }
    return true

};