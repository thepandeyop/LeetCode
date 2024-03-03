
// Function to check if a binary tree is balanced
function isBalanced(root) {
    // If the tree is empty, it's balanced
    if (root === null) 
        return true;
    
    // Check if the difference in heights of left and right subtrees is <= 1,
    // and recursively check left and right subtrees for balance
    return Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1 &&
        isBalanced(root.left) && isBalanced(root.right);
}

// Function to get the height of a node in the binary tree
function getHeight(root) {
    // If the node is null, return 0
    if (root === null) 
        return 0;
    
    // Recursively calculate the height of the left and right subtrees
    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);
    
    // Return the maximum height of the left and right subtrees, plus 1 (for the current node)
    return Math.max(leftHeight, rightHeight) + 1;
}
