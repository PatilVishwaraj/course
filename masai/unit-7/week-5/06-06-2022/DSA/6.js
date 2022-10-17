// Product and Sum in Array
function sumOfProducts(N, arr) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    let prod = arr[i] * (i + 1);
    sum += prod;
  }
  return sum;
}
function runProgram(input) {
  input = input.trim().split('\n');
  let N = +input[0];
  let arr = input[1].trim().split(' ').map(Number);
  console.log(sumOfProducts(N, arr));
}
// Ans 88
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`5
  2 5 4 6 8`);
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
