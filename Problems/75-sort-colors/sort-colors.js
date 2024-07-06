/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

var sortColors = function(nums) {
    let start = 0;
    let index = 0;
    let end = nums.length - 1;

    while (index <= end) {
        if (nums[index] === 0) {
            swap(nums, index, start);
            start++;
            index++;
        } else if (nums[index] === 2) {
            swap(nums, index, end);
            end--;
        } else {
            index++;
        }
    }
};
