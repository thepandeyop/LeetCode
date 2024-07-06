/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  let helper= function(root){
      if(!root || root===p ||root===q) return root;
      let left = helper(root.left);
      let right = helper(root.right);
      return left && right ? root : left || right;
  }
  return helper(root);
};