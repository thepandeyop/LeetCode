/**
 * @param {string} s
 * @return {string}
 */
const reverse = function(s){
    if(!s || s.length <2) return s;
    return s.split('').reverse().join('');
}

var reverseWords = function(s) {
    return s.split(" ").map((w) => {
        return reverse(w);
    }).join(" ");
};