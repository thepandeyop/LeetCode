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


var maxDepth = function(root) {
    // base case 
    if(root ===null) {
        return 0; 
    }
    
      let ldepth = maxDepth(root.left);
    let rdepth = maxDepth(root.right);
    
    if(ldepth> rdepth){
        return (ldepth + 1);
    }
    else {
       return (rdepth + 1);  
    }
   
};