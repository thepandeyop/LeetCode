/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
     let dict = {};

// Count the occurrences of each element
  nums.forEach((element) => {
    if (!dict.hasOwnProperty(element)) {
      dict[element] = 1;
    } else dict[element]++;
  });

//{ '2': 1, '3': 2 } - 1st test case
//{ '1': 3, '2': 4 } - 2nd test case

// Find the element with the maximum count
  let keys=Object.keys(dict)
  keys.sort((a,b)=> dict[b]-dict[a])
  return keys[0] 
};