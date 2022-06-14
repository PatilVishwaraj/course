// Fibonacci-Recursion
var dp = {};
function fib(num) {
  if (num < 0) return -1;
  if (num <= 1) return num;
  if (dp[num] == undefined) {
    dp[num] = fib(num - 1) + fib(num - 2);
  }
  return dp[num];
}
function runProgram(input) {
  num = +input;
  console.log(fib(num));
}
// Ans 3
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
