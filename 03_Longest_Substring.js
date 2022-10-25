// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * Explanation: this is a Window Sliding technique: computational technique to reduce the use of nested loops
 * and replace it with a single loop. This technique can reduce the time complexity to O(n).
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let maxSize = 0;
  const set = new Set();

  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  for (let i = 0; i < s.length; i++) {
    // If there is duplicate, delete the stored value starting from the left until the duplicate is removed
    // ie Sliding Window
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);

    maxSize = Math.max(maxSize, i - left + 1);
  }

  return maxSize;
};

console.log(`Case 1`, lengthOfLongestSubstring("abcabcbb") === 3);
console.log(`Case 2`, lengthOfLongestSubstring("bbbbb") === 1);
console.log(`Case 3`, lengthOfLongestSubstring("pwwkew") === 3);
