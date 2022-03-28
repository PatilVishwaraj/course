// Search the evil
function runProgram(input) {
  input = input.trim().split("\n").map(Number);
    
}
// Ans true
//     false
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  4 4
  1 2 3 4
  5 6 7 8
  9 10 11 12
  13 14 15 16 
  13
  4 4
  1 2 3 4
  5 6 7 8
  9 10 11 12
  13 14 15 16 
  17`);
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
