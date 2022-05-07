// Just find minimum
function runProgram(input) {
  input = input.trim().split("\n").map(Number);
  
}
// Ans 3
//     3
//     5
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`11
  PUSH 5
  PUSH 7
  PUSH 3
  PUSH 8
  PUSH 10
  MIN
  POP
  POP
  MIN
  POP
  MIN`);
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
