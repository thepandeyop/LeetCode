/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let result = '';
    for(let i=0;i<s.length;i=i+2*k){
        let str = s.slice(i, i+2*k).split('');
        
        let start = 0;
        let end = k-1;
    while(start<=end){
        [str[start],str[end]] = [str[end],str[start]];
        start +=1;
        end -=1;
    }
        result  = result + str.join('');
    }
    return result;
    
    
};