/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let count  = new Array(1001).fill(0);
    
    // Count the occurrence of each element in arr1
    for(let num of arr1){
        count[num]++;
    }
    
    const ans = new Array(arr1.length);
    let index = 0;
    
    // Place elements from arr2 into ans based on their count
    for(let num of arr2){
        while(count[num] > 0){
            ans[index] = num;
            index++;
            count[num]--;
        }
    }
    
    // Place the remaining elements from arr1 into ans in sorted order
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            ans[index] = i;
            index++;
            count[i]--;
        }
    }
    
    return ans;
};
