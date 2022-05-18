// 2D Array and Phrase
function runProgram(input) {
  input = input.trim().split("\n").map(Number);
  
}
// Ans 2
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`5 5
  safer
  amjad
  babol
  aaron
  songs`);
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