// Matrix Non Prime Check
function runProgram(input) {
  input = input.trim().split('\n').map(Number);
}
// Ans 5
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3 3
  1 2 3
  4 5 6
  7 8 9 `);
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
