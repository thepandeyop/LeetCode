/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
     let n=nums.length
    if(n<=4) return 0
    nums.sort((a,b)=>a-b)
    let result=Number.MAX_SAFE_INTEGER
    
    for(let i=0;i<4;i++){
            result=Math.min(result,nums[n-4+i]-nums[i])
    }
    return result;
};