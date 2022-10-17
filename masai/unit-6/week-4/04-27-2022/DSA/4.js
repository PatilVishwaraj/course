// Minimum Platforms Required
function runProgram(input) {
  input = input.trim().split("\n").map(Number);
  
}
// Ans 3 
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`6
  9:00 9:40 9:50 11:00 15:00 18:00
  9:10 12:00 11:20 11:30 19:00 20:00`);
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
