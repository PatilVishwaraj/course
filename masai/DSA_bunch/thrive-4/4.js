// Betty Buys A Present
function runProgram(input) {
  input = input.trim().split('\n').map(Number);
}
// Ans 1 7
//     2 6
//     3 5
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`8 2`);
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
