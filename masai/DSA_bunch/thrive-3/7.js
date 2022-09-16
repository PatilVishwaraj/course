// Pair less than K
function countPairs(N, K, Arr) {
  let max = 0;
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      let sum = Arr[i] + Arr[j];
      if (sum < K && sum > max) {
        max = sum;
      }
    }
  }
  if (max > 0) {
    return max;
  } else {
    return -1;
  }
}
function runProgram(input) {
  input = input.trim().split('\n');
  let test = +input[0];
  for (let i = 1; i < test * 3; i += 3) {
    let N = +input[i];
    let Arr = input[i + 1].trim().split(' ').map(Number);
    let K = +input[i + 2];
    console.log(countPairs(N, K, Arr));
  }
}
// Ans 5
//     -1
//     4
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3
  6
  1 7 6 4 8 4
  7
  1
  2
  3
  6
  5 3 8 2 1 9
  5`);
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
