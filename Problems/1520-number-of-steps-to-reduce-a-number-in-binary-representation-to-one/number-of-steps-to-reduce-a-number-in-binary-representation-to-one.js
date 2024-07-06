/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
    let res = 0,
        carry = 0,
        i = s.length - 1;
    while (i > 0) {
        const num = +s[i] + carry;
        if (num & 1) {
            res += 2;
            carry = 1;
        } else {
            res += 1;
        }

        i--;
    }
    return carry + res;
};