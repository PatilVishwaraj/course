// Implement GCD
function GCD(A, B) {
  if (A == 0) return B;
  return GCD(B % A, A);
}
function runProgram(input) {
  input = input.trim().split('\n');
  let N = +input[0];
  for (let i = 1; i <= N; i++) {
    let [A, B] = input[i].trim().split(' ').map(Number);
    console.log(GCD(A, B));
  }
}
// Ans 3
//     1
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  6 9
  2 25`);
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
