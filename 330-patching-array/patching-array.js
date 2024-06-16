/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
   let sum = 0;
    let expected = 0;
    let i =0;
    let m = nums.length;
    let minpatch = 0;
    while(sum<n){
        if(sum>=expected){
            expected  = sum+1;
        }
        else{
            if(i<m && nums[i]<=expected){
                sum +=nums[i];
                i++;
            }
            else {
                minpatch++;
                sum +=expected;
            }
        }
    }
    return minpatch
};