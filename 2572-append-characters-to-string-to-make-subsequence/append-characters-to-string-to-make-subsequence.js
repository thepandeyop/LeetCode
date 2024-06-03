/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
   let ln = t.length;
    let j = 0;

    for (let i = 0; i < s.length; i++) {

        if (s[i] === t[j]) {
            j++;
            ln--;
        }
    }
    return ln;
};