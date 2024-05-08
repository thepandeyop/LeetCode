/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
      let medal = ["Gold Medal", "Silver Medal", "Bronze Medal"]
    let d = new Map(score.map(s=>s).sort((a, b) => b - a).map((a, i) => [a, i]))
    return score.map((s) => d.get(s) < 3 ? medal[d.get(s)] : (d.get(s)+1).toString())
};