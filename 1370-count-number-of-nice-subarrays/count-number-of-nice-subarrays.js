/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let n = nums.length;
    let left = 0;
    let right = 0;
    let count = 0;
    let max = 0;
    let temp = 0;

    while (right < n) {
        if (nums[right] % 2 === 1) {
            count++;
            temp = 0;
        }

        while (count === k) {
            temp++;
            if (nums[left] % 2 === 1) {
                count--;
            }
            left++;
        }

        max = max + temp;
        right++;
    }

    return max;
};
