// Bubble Sort Problem
function solve(N, arr) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr.join(' '));
  return;
}
function runProgram(input) {
  input = input.trim().split('\n');
  let N = +input[0];
  let arr = input[1].trim().split(' ').map(Number);
  console.log(solve(N, arr));
}
// Ans 0 3 5 8 9
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`5
  3 5 0 9 8`);
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
