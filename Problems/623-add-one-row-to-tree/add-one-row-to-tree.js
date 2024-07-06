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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
const addOneRow = (() => {
    "use strict";
    return (root, val, depth) => {
        if (depth === 1) {
            return new TreeNode(val, root);
        }
        dfs(root, val, depth, 2);
        return root;
    };

    function dfs(root, val, depth, curLevel) {
        if (!root) return;
        if (depth === curLevel) {
            root.left = new TreeNode(val, root.left);
            root.right = new TreeNode(val, null, root.right);
            return;
        }
        ++curLevel;
        dfs(root.left, val, depth, curLevel);
        dfs(root.right, val, depth, curLevel);
    }
})();