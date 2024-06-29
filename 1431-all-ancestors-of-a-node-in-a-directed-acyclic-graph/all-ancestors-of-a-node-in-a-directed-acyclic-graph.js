/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
    let aps = Array(n).fill().map(() => new Set())
    for (let [x, y] of edges) {
        aps[y].add(x)
    }
    for (let ps of aps) {
        for (let p of ps) {
            for (let gp of aps[p]) {
                ps.add(gp)
            }
        }
    }
    return aps.map(ps => [...ps].sort((a, b) => a - b)) 
};