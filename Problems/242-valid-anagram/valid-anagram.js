/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length)return false;

    const chmap = Array(26).fill(0);
    for(let i =0;i<s.length;i++){
        chmap[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
          chmap[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    return chmap.every(count => count ===0);
};