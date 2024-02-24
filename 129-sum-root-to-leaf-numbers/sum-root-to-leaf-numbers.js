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
var sumNumbers = function(root) {

  return helper(root,0);
};
 
    function helper(root, sum){
        if(!root) return false;
         sum = sum * 10 + root.val;
        if(root.left === null && root.right===null){
            return sum;
            
        }
      return  helper(root.left,sum) + helper(root.right,sum);
    }
