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
 * @return {number[]}
 */
const postorderTraversal = root => {
    const ans = [];
    const postOrderDFS = node => {
        if (!node) return;
        if (node.left) postOrderDFS(node.left);
        if (node.right) postOrderDFS(node.right);
        ans.push(node.val);
        return;
    }
    postOrderDFS(root);
    return ans;
};