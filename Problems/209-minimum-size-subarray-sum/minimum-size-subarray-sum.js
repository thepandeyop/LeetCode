/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let n = nums.length;
    let i =0;
    let j =0;
    let sum =0;
    let result =0;
    while(j<nums.length){
        sum = sum + nums[j];
        while(sum>=target){
            let len =j-i+1;
            if(result ===0 || len<result) result = len;
            sum = sum-nums[i];
            i++;

        }
        j++;

    }
    return result;
};