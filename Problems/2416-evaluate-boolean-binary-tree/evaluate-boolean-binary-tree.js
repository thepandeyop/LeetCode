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
var evaluateTree = function(root) {
    if(root.left===null && root.right===null) {
        return (root.val===1)?true:false;
    }
    let left =false;
    let right = false;
    if(root.left!==null){
        left = evaluateTree(root.left)
    }
    
      if(root.right!==null){
        right = evaluateTree(root.right)
    }
    let res = true;
    
    if(root.val===2){
        res = (left || right)? true: false;
    }
    
     else if(root.val===3){
        res = (left && right)? true: false;
    }
    
    return res;
};