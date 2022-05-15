/*
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
*/

var spiralOrder = function (matrix) {
  let x = matrix[0].length,
    y = matrix.length - 1;
  const res = [];
  let i = 0,
    j = -1;

  const collect = () => {
    res.push(matrix[i][j]);
  };

  const actionHandler = (type, offset, step) => {
    for (let k = 0; k < step; k++) {
      if (type == "i") i += offset;
      if (type == "j") j += offset;
      collect();
    }
    return step - 1;
  };

  while (true) {
    if (!x) break;
    x = actionHandler("j", 1, x);

    if (!y) break;
    y = actionHandler("i", 1, y);

    if (!x) break;
    x = actionHandler("j", -1, x);

    if (!y) break;
    y = actionHandler("i", -1, y);
  }
  return res;
};

const result = spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log(result);
