function waysToZero(N) {
  if (N == 0) {
    return 1;
  }
  if (N < 0) {
    return 0;
  }
  return waysToZero(N - 1) + waysToZero(N - 2) + waysToZero(N - 5);
}

function runProgram(input) {
  input = input.trim().split("\n").map(Number);
  let test = input[0];
  for (let i = 1; i <= test; i++) {
    let N = input[i];
    console.log(waysToZero(N));
  }
}

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
