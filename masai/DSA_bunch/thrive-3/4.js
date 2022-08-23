// Result or Tie - Tic Tac Toe
function ticTacToe(matrix) {
  //write code here
}
function runProgram(input) {
  input = input.trim().split('\n').map(Number);
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
