// Everything related to Binary Search
function runProgram(input) {
  input = input.trim().split("\n").map(Number);
  
}
// Ans 0 2 3
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`6
  1 1 1 2 2 2	
  1`);
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
