/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
   if(s.length>t.length)return false;
   const tt = t.length;
   let seq = 0;
   for(let i =0; i<tt;i++){
       if(s[seq]===t[i]){
           seq++;
       }
   }
   return seq === s.length;
};