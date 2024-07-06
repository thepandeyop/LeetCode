/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
      let nums_xor = nums.reduce((a,b) => a^b) 
    let first = 0, second = 0, unit_bit
    for (let i = 0;  i < 32; i++) {
        unit_bit = 1 << i
        if (nums_xor & unit_bit)
            break
    }
    for (let num of nums)
        if (num & unit_bit)
            first ^= num
        else
            second ^= num
    return [first, second]
};