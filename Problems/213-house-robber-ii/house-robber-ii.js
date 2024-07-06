/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
 // Check if the input list is empty or undefined
  if (nums.length === 0 || nums === undefined) {
    return 0;
  }

  // If the input list has only one element, return that
  // element
  if (nums.length === 1) {
    return nums[0];
  }

  // Return the maximum value from calling the helper
  // function on the input list minus the last element
  // and the input list minus the first element
  return Math.max(
    houseRobberHelper(nums.slice(0, -1)),
    houseRobberHelper(nums.slice(1))
  );
}

























function houseRobberHelper(nums) {
  // Create a lookup array with the same length as the
  // input list, filled with 0s
  const lookupArray = new Array(nums.length + 1).fill(0);
  lookupArray[0] = 0;
  lookupArray[1] = nums[0];

  // Iterate through the input list starting from the
  // second element
  for (let i = 2; i <= nums.length; i++) {
    // Update the lookup array at each index with the
    // maximum value between the current element in the
    // input list plus the previous element in the
    // lookup array and the current element in the
    // lookup array
    lookupArray[i] = Math.max(
      nums[i - 1] + lookupArray[i - 2],
      lookupArray[i - 1]
    ); 
  }

  // Return the last element in the lookup array
  return lookupArray[nums.length];
}