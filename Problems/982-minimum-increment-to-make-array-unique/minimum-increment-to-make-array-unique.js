/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    if(nums.length ===0)return 0;
    
    nums.sort((a,b)=>a-b);
    let count =0;
    for(let i =1;i<nums.length;++i){
        if(nums[i] <= nums[i-1]){
            let increment  = nums[i-1] - nums[i]+1;
            nums[i] +=increment;
            count+=increment;
        }
    }
    return count;
};