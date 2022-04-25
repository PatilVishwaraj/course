// Element in the middle
function runProgram(input) {
  input = input.trim().split("\n").map(Number);
  
}
// Ans 6
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`5
  4 3 6 7 8`);
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
