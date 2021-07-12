// https://leetcode.com/problems/number-of-ways-to-split-a-string/

/**
 * @param {string} s
 * @return {number}
 */
const numWays = (s) => {
  const MOD = 1000000007;
  const intArr = s.split("").map((x) => parseInt(x));
  const sum = intArr.reduce((acc, cur) => acc + cur);

  if (sum === 0) {
    const x = intArr.length - 2;
    return ((x * (x + 1)) / 2) % MOD;
  }

  if (sum % 3 !== 0) return 0;

  // Get the index of the n-th 1
  const n = sum / 3;
  const firstIdx = getNthIndex(intArr, n, 0);
  const secondIdx = getNthIndex(intArr, n, firstIdx + 1);

  // Get how many 0s in between
  const firstIdxZeros = intArr.indexOf(1, firstIdx + 1) - firstIdx;
  const secondIdxZeros = intArr.indexOf(1, secondIdx + 1) - secondIdx;

  return (firstIdxZeros * secondIdxZeros) % MOD;
};

const getNthIndex = (arr, n, startIdx) => {
  let index = startIdx || 0;
  for (let i = 0; i < n; i++) {
    if (i !== 0) index++;
    if (index !== -1) index = arr.indexOf(1, index);
  }
  return index;
};

console.log(`Case 1`, numWays("101001") === 6);
console.log(`Case 2`, numWays("101100111111") === 3);
console.log(`Case 3`, numWays("1001") === 0);
console.log(`Case 4`, numWays("111") === 1);
console.log(`Case 5`, numWays("100100010100110") === 12);
console.log(`Case 6`, numWays("00000000") === 21);
