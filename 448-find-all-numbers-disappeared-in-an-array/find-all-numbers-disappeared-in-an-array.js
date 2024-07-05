/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let idx = 0;
    let arr = new Array();
    while(idx<nums.length){
        let correctidx = nums[idx] -1;
        if(nums[idx]!=nums[correctidx]){
            [nums[idx],nums[correctidx]] = [nums[correctidx],nums[idx]] ;
        }
        else {
            idx ++;
        }
    }
        for(let i = 0;i<nums.length;i++){
            if(nums[i]!==i+1)
                arr.push(i+1);
        }
        
    
    return arr;
};