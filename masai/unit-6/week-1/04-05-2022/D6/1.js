// Missing Integer
function findMissing(arr, N) {
  let arr_sum = 0
  let sum = 0
  for (let i = 0; i < N; i++) {
    arr_sum += arr[i]
    sum += i+1
  }
  sum += N+1
  console.log(sum-arr_sum)
}
function runProgram(input) {
  let arr = input.trim().split(" ").map(Number);
  let N = arr.length
  findMissing(arr, N)
}
// Ans 2
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4 5 1 3`);
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
