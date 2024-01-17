/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left =0;
    let right =0;
    let set = new Set();
    if(s.length ===0) return 0;
    if(s.length ===1) return 1;

    for(let i =0;i<s.length;i++){
        while(set.has(s[i])){
            set.delete(s[left])
            left++;
        }
        set.add(s[i]);
        right = Math.max(right,i-left+1)
    }
    return right;
};