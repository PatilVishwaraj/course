function Factorial(N) {
  if (N === 0) {
    return 0;
  }
  if (N === 1) {
    return Math.log(1);
  }
  return Factorial(N - 1) + Math.log(N);
}

function runProgram(input) {
  input = +input;
  let ans = Factorial(input).toFixed(4);
  console.log(ans);
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3`);
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
