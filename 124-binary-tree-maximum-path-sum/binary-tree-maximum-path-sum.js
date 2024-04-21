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
 * @return {number}
 */
var maxPathSum = function(root) {
    let sum = -Infinity;
    function helper(root){
        if(root===null) return 0;
        
        let left = Math.max(0,helper(root.left));
        let right = Math.max(0,helper(root.right));
        
        sum  = Math.max(sum, root.val + left+right);
        return root.val + Math.max(left,right);
    }
    helper(root);
    return sum;
};