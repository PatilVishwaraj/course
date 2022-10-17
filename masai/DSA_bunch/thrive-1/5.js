// Binary Matrix
function binaryMatrix(N, M, matrix) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (matrix[i][j] === 1) {
        matrix[i][j] = 0;
      } else {
        matrix[i][j] = 1;
      }
    }
  }
  for (let i = 0; i < N; i++) {
    console.log(matrix[i].join(' '));
  }
  return;
}
function runProgram(input) {
  input = input.trim().split('\n');
  let [N, M] = input[0].trim().split(' ').map(Number);
  let matrix = [];
  for (let i = 1; i <= N; i++) {
    let row = input[i].trim().split(' ').map(Number);
    matrix.push(row);
  }
  binaryMatrix(N, M, matrix);
}
// Ans 0 1
//     1 0
//     0 0
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3 2
  1 0
  0 1
  1 1`);
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
