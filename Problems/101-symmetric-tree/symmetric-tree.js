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
    function check(p,q) {
        if(p===null || q===null) return p===q;
        if(p.val !==q.val) return false;
        
        return check(p.left,q.right)&& check(p.right,q.left);
    }
    return check(root.left,root.right);
};