/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  if (triangle.length === 1) return triangle[0]

  let minPathSums = triangle[triangle.length - 1]
  triangle.pop()

  while(triangle.length) {
    const arr = triangle.pop()
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] + Math.min(minPathSums[i], minPathSums[i + 1])
    }
    minPathSums = arr
  }
  
  return minPathSums
};