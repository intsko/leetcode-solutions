/*
Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]
*/

var findDiagonalOrder = function (mat) {
  const cells = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      cells.push({
        i,
        j,
        diagonal: i + j,
        val: mat[i][j],
      });
    }
  }
  return cells
    .sort(
      (cell1, cell2) =>
        cell1.diagonal - cell2.diagonal ||
        (cell1.diagonal % 2 === 0 ? cell2.i - cell1.i : cell1.i - cell2.i)
    )
    .map(({ val }) => val);
};

const result = findDiagonalOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log(result);
