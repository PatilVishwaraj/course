// Koramangala to BTM
function runProgram(input) {
  input = input.trim().split("\n").map(Number);
    
}
// Ans 3
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`11
  1 3 5 8 9 2 6 7 6 8 9`);
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
