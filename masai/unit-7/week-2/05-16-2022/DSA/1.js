// Fibonacci Returns Again
var fib = { 0: 0, 1: 1 };
function fibonacci(num) {
  if (fib[num] == undefined) fib[num] = fibonacci(num - 1) + fibonacci(num - 2);
  return fib[num];
}
function runProgram(input) {
  num = +input;
  console.log(fibonacci(num));
}
// Ans 5
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
