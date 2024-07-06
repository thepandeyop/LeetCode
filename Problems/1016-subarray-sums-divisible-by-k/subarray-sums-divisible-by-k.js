/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
Map.prototype.getOrDefault = function(key, defaultValue) {
    return this.has(key) ? this.get(key) : defaultValue;
};

var subarraysDivByK = function(nums, k) {
   let map = new Map();
    map.set(0, 1);  // Initializing with (0, 1)
    let res = 0;
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let mod = ((sum % k) + k) % k;  // Ensure mod is non-negative

        if (map.has(mod)) {
            res += map.get(mod);
        }
        map.set(mod, map.getOrDefault(mod, 0) + 1);  // Update the count for this mod value
    }
    
    return res;
};