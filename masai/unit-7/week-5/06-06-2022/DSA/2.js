// Triplets with sum Zero
function sumZero(N, Arr) {
  let count = 0;
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        if (Arr[i] + Arr[j] + Arr[k] === 0) {
          count++;
        }
      }
    }
  }
  return count;
}
function runProgram(input) {
  input = input.trim().split('\n');
  let N = +input[0];
  let Arr = input[1].trim().split(' ').map(Number);
  console.log(sumZero(N, Arr));
}
// Ans 2
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4
  -1 -1 -2 3`);
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
