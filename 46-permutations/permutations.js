/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  if (nums.length === 0) return [[]];
  
  const first = nums[0];
  const rest = nums.slice(1);
  
  const permsWithoutFirst = permute(rest);
  
  const allPermutations = [];
  
  permsWithoutFirst.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      allPermutations.push([...perm.slice(0,i), first, ...perm.slice(i)]);
    }
  });
  
  return allPermutations;
  
};