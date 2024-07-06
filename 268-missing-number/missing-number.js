/**
 * @param {number[]} nums
 * @return {number}
 */
// using bit
var missingNumber = function(nums) {
   
     const n = nums.length;
    const arr = new Array(n + 1).fill(0);
    
    for (let i = 0; i < n; i++) {
        arr[nums[i]] = 1;
    }
    
    for (let i = 0; i <= n; i++) {
        if (arr[i] === 0) {
            return i;
        }
    }
    
    return -1;
    
};