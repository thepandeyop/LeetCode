/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    if(preorder.length===0) return null;
    if(preorder.length===1) return new TreeNode(preorder[0]);
    var res = new TreeNode(preorder[0]);

    for(let i=1; i<preorder.length; i++){
        res = insert(res,preorder[i]);
    }
    return res;
};

const insert = (root,val) =>{
    if(root===null) return new TreeNode(val);

    if(val<root.val){
        root.left = insert(root.left,val);
    }
    else {
        root.right = insert(root.right,val);
    }
    return root;
}