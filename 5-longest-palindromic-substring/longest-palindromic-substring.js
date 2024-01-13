/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
     let longstring =''
      let substring =''
      for(let i=0;  i < s.length;i++){
         for(let j=s.length; j >i ; j--){

               substring = s.slice(i,j)
               if(ispallindrome(substring)&& longstring.length < substring.length ){
                   longstring = substring
               }
             
         }
      }


      return longstring
         
};

function ispallindrome(substring){
      
      for(let i=0;i < substring.length/2;i++){
             if(substring[i] != substring[substring.length-(1+i)]){
                  return false
             }
      }

      return true
}



