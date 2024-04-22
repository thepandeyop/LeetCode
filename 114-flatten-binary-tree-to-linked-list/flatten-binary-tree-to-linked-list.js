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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(root==null) return null;
    if(root.left==null && root.right==null) return root;
    let r = flatten(root.right);
    if(!root.left){
        root.right=r;
    }
    else{
        let l=flatten(root.left);
        root.right=l;
        while(l.right!==null){
            l=l.right;
        }
        l.right=r;
        root.left=null;
    }
    return root;
};