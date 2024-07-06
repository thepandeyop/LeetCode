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
 * @return {TreeNode}
 */
function solve(root, sum){
    if(root===null) return 0;
    
   let right = solve(root.right,sum);
   let val = root.val;
    root.val = right+ sum+ val;
  let left = solve(root.left,root.val);
    return right+left+val;
}
var bstToGst = function(root) {
    solve(root,0);
    return root;
};