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
var sumNumbers = function(root, isRoot=true) {
    if(!root) return [];
    const res = [];
    sumNumbers(root.left, false).forEach(item=>res.push(root.val+''+item));
    sumNumbers(root.right, false).forEach(item=>res.push(root.val+''+item));
    if(!res.length) res.push(root.val);
    
    return isRoot? res.map(Number).reduce((a,c)=>a+c, 0) : res;
};