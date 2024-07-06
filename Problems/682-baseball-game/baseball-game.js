/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(ops) {
    let arr = [];

    for (let i = 0; i < ops.length; i++) {
        if (ops[i] == 'C') {
            arr.pop();
            continue;
        }
        if (ops[i] == 'D') {
            arr.push(arr[arr.length - 1] * 2);
            continue;
        }
        if (ops[i] == '+') {
            arr.push((arr[arr.length - 2]) + arr[arr.length - 1]);
            continue;
        }
        ops[i] = +ops[i];
        if (Number.isInteger(ops[i])) {
            arr.push(ops[i]);
        }
    }
    return arr.reduce((a, b) => a + b, 0);
};