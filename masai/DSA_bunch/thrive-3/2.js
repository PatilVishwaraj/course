// Prime Loop Check
function primeLoopCheck(num) {
  if (num < 2) return 0;
  let ocu;
}
function runProgram(input) {
  num = +input;
}
// Ans 2
//     3
//     5
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`5`);
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
