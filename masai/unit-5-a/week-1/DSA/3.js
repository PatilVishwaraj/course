// Fibonacci Returns Again
var fib = {0:0, 1:1}
function fibonacci(num) {
  if (num<2) {
    return num
  }
  if (fib[num]) {
    return fib[num]
  } else {
    fib[num] = fibonacci(num-1)+fibonacci(num-2)
    return fib[num]
  }
}
function runProgram(input) {
  input = +input;
  console.log(fibonacci(+input))
}
// Ans 5
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`6`);
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
