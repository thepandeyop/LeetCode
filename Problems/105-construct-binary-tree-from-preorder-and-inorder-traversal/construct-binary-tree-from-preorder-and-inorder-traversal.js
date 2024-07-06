/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (inorder.length) {
        const indexValue = preorder.shift()
        const indexRoot = inorder.indexOf(indexValue)

        let root = new TreeNode(indexValue)
        root.left = buildTree(preorder, inorder.slice(0, indexRoot))
        root.right = buildTree(preorder, inorder.slice(indexRoot + 1))
        
        return root
    }
    return null
};
