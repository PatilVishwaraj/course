// Local Maxima
function countLocalMaxima(N, Arr) {
  if (N < 3) return -1;
  let count = 0;
  for (let i = 1; i < N - 1; i++) {
    if (Arr[i] > Arr[i - 1] && Arr[i] > Arr[i + 1]) {
      count++;
    }
  }
  return count;
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0];
  for (let i = 1; i < tests * 2; i += 2) {
    let N = +input[i];
    let Arr = input[i + 1].trim().split(" ").map(Number);
    console.log(countLocalMaxima(N, Arr));
  }
}
// Ans -1
//     3
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  2
  1 2
  10
  884 729 768 201 266 494 597 328 705 287`);
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
