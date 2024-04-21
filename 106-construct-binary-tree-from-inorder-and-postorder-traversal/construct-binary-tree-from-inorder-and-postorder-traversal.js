/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (!inorder.length) return null;
    
    const root = new TreeNode(postorder.pop());
    const dividepoint = inorder.indexOf(root.val);
    
    root.right = buildTree(inorder.slice(dividepoint + 1), postorder);
    root.left = buildTree(inorder.slice(0, dividepoint), postorder);
   
    return root;
};