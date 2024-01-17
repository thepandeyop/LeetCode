/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  if (!s.length || !t.length || s.length < t.length) return "";
  if (s === t) return s;

  let neededCharsMap = {};
  let windowMap = {};
  let needToHave = 0;

  for (let c of t) {
    if (!neededCharsMap[c]) {
      needToHave++;
    }
    neededCharsMap[c] = (neededCharsMap[c] || 0) + 1;
  }

  let currentlyHave = 0;
  let result = [];
  let resultLength = Infinity;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    let char = s[right];
    windowMap[char] = (windowMap[char] || 0) + 1;

    if (neededCharsMap[char] && windowMap[char] === neededCharsMap[char]) {
      currentlyHave++;
    }

    while (currentlyHave === needToHave) {
      if (right - left + 1 < resultLength) {
        result = [left, right];
        resultLength = right - left + 1;
      }
      windowMap[s[left]]--;
      if (neededCharsMap[s[left]] && windowMap[s[left]] < neededCharsMap[s[left]]) {
        currentlyHave--;
      }
      left++;
    }
  }
  return resultLength !== Infinity ? s.slice(result[0], result[1] + 1) : "";
};