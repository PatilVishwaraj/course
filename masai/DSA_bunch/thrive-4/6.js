// Flip Matrix
function runProgram(input) {
  input = input.trim().split('\n').map(Number);
}
// Ans 1 0 0
//     0 1 0
//     1 1 1
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3 
  1 1 0
  1 0 1
  0 0 0 `);
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
