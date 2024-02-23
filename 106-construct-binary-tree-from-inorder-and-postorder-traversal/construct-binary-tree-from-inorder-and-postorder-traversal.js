var buildTree = function(inorder, postorder) {
  const len = postorder.length
  if (!len) return null

  const rootIndex = len - 1
  const rootValue = postorder[rootIndex]
  let i = rootIndex
  while (inorder[i] !== rootValue) {
    i--
  }

  const node = new TreeNode(rootValue)
  if (i) {
    node.left = buildTree(inorder.slice(0, i), postorder.slice(0, i))
  }
  if (i < rootIndex) {
    node.right = buildTree(inorder.slice(i + 1), postorder.slice(i, rootIndex))
  }
  
  return node
};