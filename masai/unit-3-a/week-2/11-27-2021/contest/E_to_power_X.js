function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

function ePowerX(X, N) {
  if (N === 0) {
    return 1;
  }
  return X ** N / factorial(N) + ePowerX(X, N - 1);
}

function runProgram(input) {
  let [X, N] = input.trim().split(" ").map(Number);
  let ans = ePowerX(X, N).toFixed(4);
  ans;
  console.log(ans);
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4 2`);
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
