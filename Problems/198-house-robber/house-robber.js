/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length;
    let dp = new Array(n).fill(-1);
    return f(n-1,nums,dp);
    
     function f(i,nums,dp){
         if(i===0) return nums[i];
         if(i<0) return 0;
         if(dp[i]!==-1) return dp[i];
         
         let pick =nums[i] + f(i-2,nums,dp);
         let notpick = 0 + f(i-1,nums,dp);
         return dp[i] =Math.max(pick,notpick);
     }
};