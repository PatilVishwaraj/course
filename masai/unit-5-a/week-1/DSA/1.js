// Different ways as a Sum
var dp = {}
function sumWays(num) {
  if (num==0) {
    return 1
  }
  if (num<0) {
    return 0
  }
  if (dp[num]) {
    return dp[num]
  } else {
    dp[num] = sumWays(num-1) + sumWays(num-3) + sumWays(num-4)
    return dp[num]
  }
}
function runProgram(input) {
  let num = +input;
  console.log(sumWays(num))
}
// Ans 6
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
