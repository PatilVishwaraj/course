// Result or Tie - Tic Tac Toe
function ticTacToe(matrix) {
  for (let i = 0; i < 3; i++) {
    if (matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2]) {
      console.log(matrix[i][0]);
      return;
    } else if (matrix[0][i] == matrix[1][i] && matrix[1][i] == matrix[2][i]) {
      console.log(matrix[0][i]);
      return;
    }
  }
  if (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2]) {
    console.log(matrix[i][0]);
    return;
  } else if (matrix[2][0] == matrix[1][1] && matrix[1][1] == matrix[0][2]) {
    console.log(matrix[0][i]);
    return;
  }
  console.log('Tie');
  return;
}
function runProgram(input) {
  input = input.trim().split('\n');
  let matrix = [];
  for (let i = 0; i < 3; i++) {
    let row = input[i].trim().split(' ');
    matrix.push(row);
  }
  ticTacToe(matrix);
}
// Ans o
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`x o x
  o x x
  o o o`);
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
