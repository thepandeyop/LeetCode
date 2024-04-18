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
var maxDepth = function(root) {
    var depth = 0;
    return getDepth(root, depth);
};

function getDepth(node, depth){

	if(node){
			depth++;
			return Math.max(getDepth(node.left, depth), getDepth(node.right, depth));
	} else {
			return depth;
	}
}