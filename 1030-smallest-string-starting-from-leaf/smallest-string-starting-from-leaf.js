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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    let res  = "";
    
    var dfs = function(root,path){
        if(root===null) return ;
        
        let newpath = path + String.fromCharCode(root.val + 97);
        
        if(root.right ===null && root.left ===null ){
            newpath = newpath.split('').reverse().join('');
            
            if(res>newpath || res===''){
                res = newpath;
            }
        }
        dfs(root.left,newpath);
        dfs(root.right,newpath);
    }
        dfs(root,'');
    
    return res;
};