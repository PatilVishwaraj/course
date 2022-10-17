// Check if Sorted and rotated using binary search
function runProgram(input) {
  input = input.trim().split('\n').map(Number);
}
// Ans YES
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`6
  3 4 7 9 1 2`);
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
