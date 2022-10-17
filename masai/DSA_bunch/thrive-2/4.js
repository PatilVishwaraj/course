// Number of ways problems
function countWays(num) {
  if (num === 0) return 1;
  if (num < 0) return 0;
  return countWays(num - 1) + countWays(num - 2) + countWays(num - 3);
}
function runProgram(input) {
  num = +input;
  console.log(countWays(num));
}
// Ans 7
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4`);
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
