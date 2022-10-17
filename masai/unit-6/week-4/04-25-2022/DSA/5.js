// Array Parts of Four
function ans(N, arr) {
  let M = N / 4;
  let c1 = 0;
  let c2 = 0;
  let c3 = 0;
  let c4 = 0;
  for (let i = 0; i < M; i++) {
    c1 += arr[i];
    c2 += arr[M + i];
    c3 += arr[2 * M + i];
    c4 += arr[3 * M + i];
  }
  return 2 * c1 + c2 + 2 * c3 + c4;
}
function runProgram(input) {
  input = input.trim().split('\n');
  let N = +input[0];
  let arr = input[1].trim().split(' ').map(Number);
  console.log(ans(N, arr));
}
// Ans 50
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`8
  1 2 3 4 5 6 7 8`);
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
