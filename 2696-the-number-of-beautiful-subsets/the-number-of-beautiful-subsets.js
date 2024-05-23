/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function(nums, k) {
    let result = 0
    let subset = []
    const bt = (i) => {
        if (i >= nums.length) {
            if (isBeautiful(subset, k)) {
                result += 1
            }
            return
        }

        subset.push(nums[i])
        bt(i + 1)

        subset.pop()
        bt(i + 1)
    }
    bt(0)
    return result
};

const isBeautiful = (arr, k) => {
    if (!arr.length) return false
    if (arr.length === 1) return true
    let set = new Set(arr)
    for(const num of arr) {
        if (set.has(num + k) || set.has(num - k)) return false
    }
    return true
}