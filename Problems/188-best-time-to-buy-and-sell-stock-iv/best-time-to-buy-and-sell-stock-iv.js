/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    let n = prices.length;
    let memo = new Array(n).fill(null).map(() => new Array(2).fill(null).map(() => new Array(k + 1).fill(-1)));

    function helper(arr, idx, ableToBuy, remainingTransactions) {
        if (remainingTransactions == 0 || idx == arr.length)
            return 0;
        
        if (memo[idx][ableToBuy][remainingTransactions] !== -1)
            return memo[idx][ableToBuy][remainingTransactions];
        
        if (ableToBuy) {
            let take = -arr[idx] + helper(arr, idx + 1, 0, remainingTransactions);
            let notTake = helper(arr, idx + 1, 1, remainingTransactions);
            memo[idx][ableToBuy][remainingTransactions] = Math.max(take, notTake);
        } else {
            let take = arr[idx] + helper(arr, idx + 1, 1, remainingTransactions - 1);
            let notTake = helper(arr, idx + 1, 0, remainingTransactions);
            memo[idx][ableToBuy][remainingTransactions] = Math.max(take, notTake);
        }
        
        return memo[idx][ableToBuy][remainingTransactions];
    }

    return helper(prices, 0, 1, k);
};