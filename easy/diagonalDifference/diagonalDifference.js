function diagonalDifference(arr) {
  let a = arr[0].length - 1;
  let b = 0;

  let output1 = 0;
  let output2 = 0;

  for (b; b <= arr[0].length - 1; b++) {
    output1 = output1 + arr[b][b];
    output2 = output2 + arr[b][a];
    a--;
  }

  return Math.abs(output1 - output2);
}

let diagDiffArray = [
  [11, 2, 4, 6, 7],
  [4, 5, 6, 8, 9],
  [10, 8, -12, 7, 8],
  [10, 8, -12, 7, 8],
  [10, 8, -12, 7, 8]
];

console.log('diagonalDifference', diagonalDifference(diagDiffArray));
