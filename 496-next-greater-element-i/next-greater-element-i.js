/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
let stack = [];
for(let i=0; i<nums1.length;i++){
    let b =nums2.indexOf(nums1[i])
    let c =false;
    for(let j=b+1; j<nums2.length;j++){
        if(nums1[i]<nums2[j]){
            stack.push(nums2[j]);
            c= true;
            break;
        }
    }
    if(c===false){
        stack.push(-1);
    }
}
 return stack;

};