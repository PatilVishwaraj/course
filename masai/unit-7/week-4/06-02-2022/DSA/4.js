// GP & Recursion
function GP(N, K) {}
function runProgram(input) {
  let [N, K] = input.trim().split(' ').map(Number);
  console.log(GP(N, K));
}
// Ans 1.2480
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3 5`);
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
