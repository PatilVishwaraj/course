// Spirally Traversing a Matrix
function spirallyTraversingAMatrix(N, matrix) {}
function runProgram(input) {
  input = input.trim().split('\n');
  let N = input[0];
  let Matrix = [];
  for (let i = 1; i <= N; i++) {
    let row = input[i].trim().split(' ').map(Number);
    Matrix.push(row);
  }
  console.log(Matrix);
}
// Ans 1 2 3 4 8 4 8 7 6 5 1 5 6 7 3 2
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4
  1 2 3 4
  5 6 7 8
  1 2 3 4
  5 6 7 8`);
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
