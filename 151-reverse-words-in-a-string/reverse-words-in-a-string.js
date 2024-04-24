/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim().split(" ");
    const words = [];
    for(let c of s) {
        if(c!=="")
            words.push(c)
    }
    
    return words.reverse().join(" ")
  
};