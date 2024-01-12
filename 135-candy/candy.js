/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const n = ratings.length;
    if (n <= 1) return n;

    const nums = new Array(n).fill(1);

    // Make sure children with a higher rating get more candy than their left neighbor
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            nums[i] += nums[i - 1];
        }
    }

    // Make sure children with higher rating get more candy than their right neighbor
    for (let i = n - 1; i > 0; i--) {
        if (ratings[i - 1] > ratings[i]) {
            nums[i - 1] = Math.max(nums[i] + 1, nums[i - 1]);
        }
    }

    let candies = 0;

    for (const e of nums) {
        candies += e;
    }

    return candies;
};