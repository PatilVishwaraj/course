const coordinates = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [1, -2],
  [2, -1],
  [2, 1],
  [-1, 2],
  [1, 2],
];

let chess = [];
for (let i = 0; i < 10; i++) {
  chess.push(new Array(10).fill(0));
}
let count = 0;
function runProgram(input) {
  let [row, col, N] = input.split(" ").map(Number);
  row = row - 1;
  col = col - 1;
  followTheKnight(row, col, N);
  console.log(count);
}

function followTheKnight(row, col, n) {
  if (row > 9 || row < 0 || col > 9 || col < 0) {
    return;
  }
  if (n == 0) {
    if (chess[row][col] == 0) {
      count++;
      chess[row][col] = 1;
    }
    return;
  }
  for (let i = 0; i < coordinates.length; i++) {
    let [a, y] = coordinates[i];
    followTheKnight(row + a, col + y, n - 1);
  }
}

runProgram(`1 1 2`);
