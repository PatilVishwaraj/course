// Swap Upper-Lower Diagonal Elements
function swapUpperLower(N, matrix) {
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return;
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0];
  for (let i = 1; i < input.length; i += N + 1) {
    var N = +input[i];
    let matrix = [];
    for (let j = i + 1; j <= i + N; j++) {
      let row = input[j].trim().split(" ").map(Number);
      matrix.push(row);
    }
    swapUpperLower(N, matrix);
    for (let k = 0; k < N; k++) {
      console.log(matrix[k].join(" "));
    }
  }
}
// Ans 1 4 7
//     2 5 8
//     3 6 9
//     2 4 8 1
//     3 5 6 3
//     5 7 4 5
//     6 9 9 6
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  3
  1 2 3
  4 5 6
  7 8 9
  4
  2 3 5 6
  4 5 7 9
  8 6 4 9
  1 3 5 6`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding(`ascii`);
  let read = ``;
  process.stdin.on(`data`, function (input) {
    read += input;
  });
  process.stdin.on(`end`, function () {
    read = read.replace(/\n$/, ``);
    read = read.replace(/\n$/, ``);
    runProgram(read);
  });
  process.on(`SIGINT`, function () {
    read = read.replace(/\n$/, ``);
    runProgram(read);
    process.exit(0);
  });
}
