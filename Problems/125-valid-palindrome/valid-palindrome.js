/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const rem = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); // help to remove all unwanter spaces
    for(let i=0;i<rem.length;i++){
        if(rem[i]!=rem[rem.length-i-1]){
            return false;
        }
    }
    return true;
};