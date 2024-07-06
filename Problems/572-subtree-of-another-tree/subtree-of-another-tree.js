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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    
    if(!root) return false;
    
    const tree = (n1,n2) => {
        if(!n1 && !n2 ) return true;
        if(!n1 || !n2) return false;
        if(n1.val !== n2.val) return false;
        
        return tree(n1.left, n2.left) && tree(n1.right, n2.right);
    }
    
    if(tree(root,subRoot))return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    
};