/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
 nums.sort((a,b) => b-a)
    let left = 0;
    let right = nums.length;
    for (; left <= right; ) {
        if (nums[left] === -nums[right]) {
        return nums[left];
        } else {
        if (nums[left] >= Math.abs(nums[right])) {
            left++;
        } else {
            right--;
        }
        }
    }
    return -1;
};