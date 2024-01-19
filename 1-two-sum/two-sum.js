/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mp = new Map();
    for(let i=0;i<nums.length;i++){
        let dif = target - nums[i];
        if(mp.has(dif)){
            return [i,mp.get(dif)];
        }
        mp.set(nums[i],i)
    }
};