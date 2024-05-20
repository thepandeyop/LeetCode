/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
     let n = prices.length;
    let memo = new Array(n).fill(null).map(() => new Array(2).fill(-1));

    function helper(arr, idx, ableToBuy, fee) {
        if (idx == arr.length)
            return 0;

        if (memo[idx][ableToBuy] !== -1)
            return memo[idx][ableToBuy];

        if (ableToBuy) {
            let take = -arr[idx] + helper(arr, idx + 1, 0, fee);
            let notTake = helper(arr, idx + 1, 1, fee);
            memo[idx][ableToBuy] = Math.max(take, notTake);
        } else {
            let take = arr[idx] - fee + helper(arr, idx + 1, 1, fee);
            let notTake = helper(arr, idx + 1, 0, fee);
            memo[idx][ableToBuy] = Math.max(take, notTake);
        }

        return memo[idx][ableToBuy];
    }

    return helper(prices, 0, 1, fee);
};