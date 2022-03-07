// Number of ways problems Returns
var dp = {}
function sandhya(steps) {
  if (steps==0) {
    return 1
  }
  if (steps<0) {
    return 0
  }
  if (dp[steps]) {
    return dp[steps]
  } else {
    dp[steps] = sandhya(steps-1) + sandhya(steps-2) + sandhya(steps-3)
    return dp[steps]
  }
}
function runProgram(input) {
  let steps = +input;
  console.log(sandhya(steps))
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
