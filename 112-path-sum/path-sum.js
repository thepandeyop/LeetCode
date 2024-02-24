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
 * @param {number} targetSum
 * @return {boolean}
 */


var hasPathSum = function(root, targetSum) {
    let res=false;
    function help(node, currentSum){
if(node==null){
    return false ;
}
        currentSum += node.val;
    if(currentSum===targetSum && !node.left && !node.right){
        res =true;
    }
    help(node.left,currentSum);
    help(node.right,currentSum);
    }
    help(root,0);
    return res;
};