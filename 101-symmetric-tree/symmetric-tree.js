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
var isSymmetric = function(root) {
    
    function helper(lRoot, rRoot){
        
        if(lRoot == null && rRoot == null) return true; //if both are null, we know so far everything is the same
        
        if(!lRoot || !rRoot) return false;  //if one of them is null, we know the nodes dont match
        
        if(lRoot.val != rRoot.val) return false; //if the root.values dont match for both nodes, we know the nodes are not the same
        
        return helper(lRoot.right, rRoot.left) && helper(lRoot.left, rRoot.right);
    }
    return helper(root.left, root.right);
};