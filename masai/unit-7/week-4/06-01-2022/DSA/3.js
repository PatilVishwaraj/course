// Who is going Forward?
function runProgram(input) {
  input = input.trim().split('\n');
  let [N, K] = input[0].trim().split(' ').map(Number);
  let Arr = input[1].trim().split(' ').map(Number);
  Arr.sort((a, b) => a - b);
  let X = N - K;
  for (let i = N - K; i > 0; i--) {
    if (Arr[i] <= 0) {
      X++;
    } else if (Arr[i] == Arr[i - 1]) {
      X--;
    } else {
      break;
    }
  }
  console.log(N - X);
}
// Ans 6
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`8 5
  10 5 5 9 8 7 7 7`);
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
