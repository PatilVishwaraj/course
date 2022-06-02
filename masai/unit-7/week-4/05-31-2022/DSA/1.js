// a and b only
function runProgram(input) {
  input = input.trim().split('\n').map(Number);
}
// Ans ababab
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`?ba??b`);
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
