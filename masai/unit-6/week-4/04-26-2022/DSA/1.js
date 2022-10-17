// Check if Sorted and rotated using binary search
function runProgram(input) {
  input = input.trim().split('\n');
  let N = +input[0];
  let arr = input[1].trim().split(' ').map(Number);
  let x = Math.floor(N / 2);
  let low = arr[0];
  let mid = arr[x];
  let high = arr[N - 1];
  if (low < mid && mid < high) {
    console.log('NO');
  } else {
    console.log('YES');
  }
}
// Ans YES
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`10
  4 6 7 9 10 -1 0 1 2 3`);
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
