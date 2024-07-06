function getBit(x, b) {
  return (x >> b) & 1;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let res = 0;

  let m = 0;
  let p = 0;
  let ll = 0;
  let rr = 0;
  let bsl = 0;
  let bsr = 0;
  let b = 0;

  for (let r = 0; r < n; r++) {
    m = (nums[r] + 1) >> 1;
    b = Math.ceil(Math.log2(nums[r] + 1));

    ll = 0;
    rr = r;

    while (nums[rr] != nums[ll]) {
      if (getBit(nums[rr], b) != getBit(nums[ll], b)) {
        p = ll;
        bsl = ll;
        bsr = rr;
        while (bsl <= bsr) {
          m = (bsl + bsr) >> 1;
          if (getBit(nums[m], b)) bsr = m - 1;
          else {
            bsl = m + 1;
            p = m;
          }
        }
        if (getBit(nums[r], b)) rr = p;
        else ll = p + 1;
      }

      b--;
    }

    res = Math.max(res, nums[r] ^ nums[rr]);
  }

  return res;
};