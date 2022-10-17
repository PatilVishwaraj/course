// Compete with Neighbour
function CWN(N, arr) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (i == 0 && arr[i] > arr[i + 1]) {
      count++;
    } else if (i == N - 1 && arr[i] > arr[i - 1]) {
      count++;
    } else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      count++;
    }
  }
  return count;
}
function runProgram(input) {
  input = input.trim().split('\n');
  let N = +input[0];
  let arr = input[1].trim().split(' ').map(Number);
  console.log(CWN(N, arr));
}
// Ans 2
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`8
  1 2 3 4 2 1 6 5`);
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
