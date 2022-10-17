// Two Sorted Arrays
function countCommon(N, arr_1, arr_2) {
  let X = 0;
  let Y = 0;
  let count = 0;
  while (X < N && Y < N) {
    if (arr_1[X] == arr_2[N - 1 - Y]) {
      count++;
      X++;
      Y++;
    } else {
      if (arr_1[X] < arr_2[N - 1 - Y]) {
        X++;
      } else if (arr_1[X] > arr_2[N - 1 - Y]) {
        Y++;
      }
    }
  }
  console.log(count);
}
function runProgram(input) {
  input = input.trim().split('\n');
  let tests = +input[0];
  for (let i = 1; i < tests * 3; i += 3) {
    let N = +input[i];
    let arr_1 = input[i + 1].trim().split(' ').map(Number);
    let arr_2 = input[i + 2].trim().split(' ').map(Number);
    countCommon(N, arr_1, arr_2);
  }
}
// Ans 4
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`1
  6
  1 2 2 3 4 5
  4 4 3 2 1 1`);
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
