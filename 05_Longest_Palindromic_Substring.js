// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const sArr = s.split("");
  const sReverse = sArr.reverse();
  console.log("sReverse :>> ", sReverse);

  // Create index mapping
  for (let i = 0; i < sArr.length; i++) {
    for (let j = 0; j < sArr.length; j++) {}
  }
};

/**
 *
 * Solution 2: Brute force
 * Implement isPalindrome() function:
 *      - For loop: if index i & index length - 1 - i have the same value until the end
 * Run double for loop, check if the substring is a palindrome
 * Time complexity: O(n^3)
 * Space complexity: O(1)
 */

var longestPalindromeBruteForce = function (s) {
  const isPalindrome = (s) => {
    if (s === "") return false;
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== s[s.length - 1 - i]) {
        return false;
      }
    }
    return true;
  };

  if (s === "") return "";
  let maxLength = 0;
  let result = "";
  const sArr = s.split("");

  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      const sliced = sArr.slice(i, j);
      if (isPalindrome(sliced)) {
        if (sliced.length > 1) {
          if (sliced.length > maxLength) {
            result = sliced;
            maxLength = sliced.length;
          }
        }
      }
    }
  }
  return result.join("");
};

/**
 * Solution 3: Dynamic Programming
 * Save the state in a 2-d array
 * If distance = 1, just check if s[i] === s[j]
 * If distance >= 1, also check if the state[i+1][j-1] is TRUE
 * P(i, j) = P(i+1, j-1) && (s[i] === s[j])
 * */

const longestPalindromeDynamic = (s) => {
  // Corner cases
  if (s === "") return "";
  if (s.length === 1) return s;

  let result = "";
  let longestStart = 0;
  let longestLength = 1;
  const sArr = s.split("");

  // state[i][j] is true if s[i,j] is palindrome
  let state = new Array(s.length)
    .fill(false)
    .map(() => new Array(s.length).fill(false));

  // Base cases
  for (let i = 0; i < sArr.length; i++) {
    state[i][i] = true;
  }

  for (let i = sArr.length - 1; i >= 0; i--) {
    for (let dist = 1; dist < sArr.length - i; dist++) {
      let j = dist + i;
      state[i][j] =
        dist === 1
          ? sArr[i] === sArr[j]
          : sArr[i] === sArr[j] && state[i + 1][j - 1];

      // If it's a palindrome, check the length
      if (state[i][j] && j - i + 1 >= longestLength) {
        longestLength = j - i + 1;
        longestStart = i;
      }
    }
  }

  result = sArr.slice(longestStart, longestStart + longestLength);
  return result.join("");
};

console.log(`Case 1`, longestPalindromeDynamic("babad") === "bab");
console.log(`Case 2`, longestPalindromeDynamic("cbbd") === "bb");
