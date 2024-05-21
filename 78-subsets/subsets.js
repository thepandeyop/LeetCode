/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
   const output = [];
    f(nums,0,[],output);
    return output;
};
function f(nums,idx,subset,output) {
    if(idx>=nums.length){
        output.push(Array.from(subset));
        return ;
    }
    subset.push(nums[idx]);
    f(nums,idx+1,subset,output);
    
    subset.pop();
    f(nums,idx+1,subset,output);
    
}