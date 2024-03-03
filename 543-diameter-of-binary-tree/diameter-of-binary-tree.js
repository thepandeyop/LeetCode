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
var diameterOfBinaryTree = function(root) {
  if(!root) return null;
    
    let max =0;
    height(root);
    return max;
    
    function height(root){
        if(!root)return null;
        
        let rl = height(root.left);
        let rr = height(root.right);
        
        max = Math.max(max, rl+rr);
        return Math.max(rl,rr) + 1;
    }
}