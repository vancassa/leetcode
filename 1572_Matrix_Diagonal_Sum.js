/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let x,
    y,
    sum = 0,
    n = mat.length;

  for (let i = 0; i < n; i++) {
    x = i;
    y = n - i - 1;

    if (y !== x) {
      sum += mat[x][y];
    }

    sum += mat[x][x];
  }
  return sum;
};

console.log(
  `Test case 1`,
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]) === 25
);
console.log(
  `Test case 2`,
  diagonalSum([
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ]) === 8
);
console.log(`Test case 3`, diagonalSum([[5]]) === 5);
