/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    let inwardDegree = new Array(n + 1).fill(0);
    let outwardDegree = new Array(n + 1).fill(0);

    for (let i = 0; i < trust.length; i++) {
        inwardDegree[trust[i][1]] += 1;
        outwardDegree[trust[i][0]] += 1;
    }

    for (let i = 1; i <= n; i++) {
        if (inwardDegree[i] == n - 1 && outwardDegree[i] == 0) {
            return i;
        }
    }
    return -1;
};