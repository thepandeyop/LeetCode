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
  if (!root) return null;
  let max = 0;
  getHeight(root);
  return max;
  function getHeight(root) {
    if (!root) return 0; // height is defined to be the number of nodes in the path in this particular question instead of the number of edges
    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);
    max = Math.max(max, leftHeight + rightHeight);
    return Math.max(leftHeight, rightHeight) + 1;
  }
}; 
