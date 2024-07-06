/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];
    if (numRows >= 1) res.push([1]);
    if (numRows >= 2) res.push([1, 1]);

    for (let i = 2; i < numRows; i++) {
        let prevRow = res[i - 1];
        let newRow = [1];

        for (let j = 1; j < prevRow.length; j++) {
            newRow.push(prevRow[j - 1] + prevRow[j]);
        }

        newRow.push(1);
        res.push(newRow);
    }

    return res;
};