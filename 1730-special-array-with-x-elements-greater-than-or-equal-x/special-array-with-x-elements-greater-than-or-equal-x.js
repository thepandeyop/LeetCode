/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
   for(let i =0; i<nums.length +1; i++){
       let counter = 0;
       for(const n of nums){
           if(n>=i){
               counter++;
           }
       }
           if(counter===i) return counter;
       
   } 
    return -1;
};