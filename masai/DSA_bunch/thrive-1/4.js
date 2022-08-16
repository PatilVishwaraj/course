// Perform Merging
function mergeArray(N, Arr1, Arr2) {
  let X = 0;
  let Y = 0;
  let result = [];
  while (X < N && Y < N) {
    console.log(X, Y);
    console.log(result);
    if (X === N) {
      result.push(Arr1[Y]);
      Y++;
    } else if (Y === N) {
      result.push(Arr1[X]);
      X++;
    } else if (Arr1[X] < Arr2[Y]) {
      result.push(Arr1[X]);
      X++;
    } else if (Arr1[Y] < Arr2[X]) {
      result.push(Arr1[Y]);
      Y++;
    }
  }
  console.log(result);
  return;
}
function runProgram(input) {
  input = input.trim().split('\n');
  let N = +input[0];
  let Arr1 = input[1].trim().split(' ').map(Number);
  let Arr2 = input[2].trim().split(' ').map(Number);
  mergeArray(N, Arr1, Arr2);
  console.log(N, Arr1, Arr2);
}
// Ans 1 2 4 5 6 7 8 9
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4
  1 5 7 9
  2 4 6 8`);
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
