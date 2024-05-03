/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    return clone(node, new Map());
};

var clone = function(node, seen) {
    if(!node) {
        return null;
    }
    if(seen.has(node)) {
        return seen.get(node);
    }
    let root = new Node(node.val, []);
    seen.set(node, root);
    
    for(const nei of node.neighbors) {
        root.neighbors.push(
            clone(nei, seen)
        );
    }
    return root;
};
