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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    
    const queue = [ [root,0]];
    let ans = [ []];
    
    while(queue.length>0) {
        const [curr, lvl] = queue.shift();
        
        if(ans.length===lvl) {
            ans.push([]);
        }
        ans[lvl].push(curr.val);
        
        if(curr.left){
            queue.push([curr.left,lvl +1]);
        }
        if(curr.right){
            queue.push([curr.right,lvl +1])
        }
        
    }
    return ans;
};