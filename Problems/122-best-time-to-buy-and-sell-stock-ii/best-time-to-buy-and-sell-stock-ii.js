/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    let dp = new Array(n).fill(null).map(() => new Array(2).fill(-1));

    function helper(arr, idx, ableToBuy) {
        if (idx == arr.length) return 0;
        
        if (dp[idx][ableToBuy] !== -1) return dp[idx][ableToBuy];
        
        if (ableToBuy) {
            let take = -arr[idx] + helper(arr, idx + 1, 0);
            let notTake = helper(arr, idx + 1, 1);
            dp[idx][ableToBuy] = Math.max(take, notTake);
        } else {
            let take = arr[idx] + helper(arr, idx + 1, 1);
            let notTake = helper(arr, idx + 1, 0);
            dp[idx][ableToBuy] = Math.max(take, notTake);
        }
        
        return dp[idx][ableToBuy];
    }

    return helper(prices, 0, 1);

};

