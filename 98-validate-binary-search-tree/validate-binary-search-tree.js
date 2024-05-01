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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let prev = null;
    function helper(node) {
        if(node===null) return true;
        if(!helper(node.left)) return false;
        if(prev !==null && node.val<=prev.val)return false;
        prev = node;
        return helper(node.right);
    }
    return helper(root);
};