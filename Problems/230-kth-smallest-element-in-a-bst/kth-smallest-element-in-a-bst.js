/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let result = []
    let dfsLeft = (node) => {
        if (!node) {
            return 
        }

        dfsLeft(node.left) 
        result.push(node.val)
        dfsLeft(node.right)
    }

    dfsLeft(root)
    
    return result[k-1]
};