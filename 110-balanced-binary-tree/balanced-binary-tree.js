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
var isBalanced = function(root) {
    if(root===null) return true;
     return Math.abs(helper(root.left) - helper(root.right)) <= 1 &&
        isBalanced(root.left) && isBalanced(root.right);
};
var helper = function(root) {
    if(root===null) return null;
    
    let lh = helper(root.left);
    let rh = helper(root.right);
    
    if(lh >rh ) return lh+1;
    else{
       return  rh+1;
    }
}