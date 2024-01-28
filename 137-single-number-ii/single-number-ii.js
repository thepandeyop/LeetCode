/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   let obj = {};
   for(var k of nums){
       obj[k] = (obj[k]!=null) ? obj[k] +1 : 1;
   }
   for(var i in obj) {
       if(obj[i]===1) return i;
   }
};