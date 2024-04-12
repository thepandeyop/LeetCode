/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let i=0;
    let j = height.length -1;
    let leftmax = height[0];
    let rightmax = height[j];
    let water =0;
 while(i<j){
     if(leftmax<=rightmax){
         water = water + leftmax-height[i];
         i++;
         
         leftmax = Math.max(leftmax,height[i]);
     }
     else {
         water = water + rightmax-height[j];
         j--;
         
         rightmax = Math.max(rightmax,height[j]);
     }
     
     
 }
    return water;
};