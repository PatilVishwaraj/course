// Masai Monetary System
function runProgram(input) {
  input = input.trim().split("\n").map(Number);
  var dp = {}
  
}
// Ans  13
//      2
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`12
  2`);
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
