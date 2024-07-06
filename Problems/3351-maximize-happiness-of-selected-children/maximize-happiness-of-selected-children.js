/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
     happiness.sort((a, b) => b - a)
    let ans = 0
    for (i = k - 1; i >= 0; i--)
        if (happiness[i] > i)
            return happiness.slice(0, i+1).reduce((acc, a) => acc + a, 0) - i*(i+1) / 2
    return 0
};