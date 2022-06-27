var numIslands = function (grid) {
  let maxI = grid.length;
  let maxJ = grid[0].length;
  let counter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        counter++;
        _walk(i, j);
      }
    }
  }

  function _walk(i, j) {
    if (i < 0 || i >= maxI || j < 0 || j >= maxJ || grid[i][j] === "0") return;

    grid[i][j] = "0";
    _walk(i + 1, j);
    _walk(i, j + 1);
    _walk(i, j - 1);
    _walk(i - 1, j);
  }
  return counter;
};

let grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

let grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log("numIslands(grid1)", numIslands(grid1));
console.log("numIslands(grid2)", numIslands(grid2));
