/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for (const alpha of magazine){
      ransomNote = ransomNote.replace(alpha, "");
    }
    if(!ransomNote) return true;
    else return false;
};