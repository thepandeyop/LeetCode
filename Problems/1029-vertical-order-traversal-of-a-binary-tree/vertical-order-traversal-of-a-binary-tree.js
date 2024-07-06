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
var verticalTraversal = function(root) {

    let minCol = 0, maxCol=0

    const colNodes = {}

    const queueNode = {
        node: root,
        row: 0,
        col: 0,
    }

    let currLevel = [queueNode]

    colNodes[0] = [queueNode]

    while (currLevel.length > 0) {

        let nextLevel = []

        for (let i=0; i<currLevel.length; i++) {

            const curr = currLevel[i]

            if (curr.node.left) {
                let col = curr.col - 1

                const queueNode = {
                    node: curr.node.left,
                    row: curr.row + 1,
                    col,
                }

                nextLevel.push(queueNode)

                if (colNodes[col]) {
                    colNodes[col].push(queueNode)
                } else {
                    colNodes[col] = [queueNode]                    
                }

                if (col < minCol) {
                    minCol = col
                }

            }

            if (curr.node.right) {
                let col = curr.col + 1 

                const queueNode = {
                    node: curr.node.right,
                    row: curr.row + 1,
                    col,
                }

                nextLevel.push(queueNode)

                if (colNodes[col]) {
                    colNodes[col].push(queueNode)
                } else {
                    colNodes[col] = [queueNode]                    
                }

                if (col > maxCol) {
                    maxCol = col
                }

            }
        }

        currLevel = nextLevel
    }

    const verticalOrder = []

    for (let i=minCol; i<=maxCol; i++) {

        const sorted = colNodes[i].sort((a,b) => {
            if (a.row - b.row) {
                return +1
            } else if (a.row === b.row) {
                return a.node.val - b.node.val
            } else {
                return -1
            }
        })

        verticalOrder.push(sorted.map(v => v.node.val))
    }

    return verticalOrder
};