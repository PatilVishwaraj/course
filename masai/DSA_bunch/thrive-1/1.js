// All Twice Except One
function checkSingle(N, arr) {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    if (sum < arr[i]) {
      sum += arr[i];
    } else {
      sum -= arr[i];
    }
  }
  return sum;
}
function runProgram(input) {
  input = input.trim().split('\n');
  let tests = input[0];
  for (let i = 1; i < tests * 2; i += 2) {
    let N = +input[i];
    let arr = input[i + 1].trim().split(' ').map(Number);
    console.log(checkSingle(N, arr));
  }
}
// Ans 5
//     3
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  1
  5
  5
  1 2 1 3 2`);
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
