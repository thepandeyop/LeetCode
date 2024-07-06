/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
      let ans = 0
    for (let i=0;i<arr.length-1;i++) {
        for (let j=i+1;j<arr.length;j++) {
            if (arr.slice(i,j+1).reduce((a,b)=>a^b)==0) {
                 ans += (j-i)
                 }
        }
  } 
    return ans
};