// N-th Tribonacci Number
function Tribonacci(num) {
  var dp = {0:0, 1:1, 2:1}
  for (let i = 3; i <= num; i++) {
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
  }
  return dp[num]
}
function runProgram(input) {
  input = input.trim().split("\n").map(Number);
  let test = input[0]
  for (let i = 1; i <= test; i++) {
    let num = input[i]
    console.log(Tribonacci(num))
  }
    
}
// Ans 4
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`1
  4`);
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
