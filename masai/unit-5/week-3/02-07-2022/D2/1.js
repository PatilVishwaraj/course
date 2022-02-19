// N-th Tribonacci Number
var T = {0:0, 1:1, 2:1}
function Tribonacci(N) {
  if (N<=0) {
    return 0
  } else if (T[N]) {
    return T[N]
  } else {
    return Tribonacci[N-3]+Tribonacci[N-2]+Tribonacci[N-1]
  }
}
function runProgram(input) {
  input = input.trim().split("\n").map(Number);
  let Tests = input[0]
  for (let i = 1; i <= Tests; i++) {
    let N = input[i]
    console.log(Tribonacci(N))
  }
}

// Ans 4
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`1
  3`);
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
