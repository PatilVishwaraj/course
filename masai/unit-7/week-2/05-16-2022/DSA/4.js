// Square root of an Integer
function findSqRoot(num) {
  let square = 1,
    i = 0;
  while (true) {
    i++;
    square = (num / square + square) / 2;
    if (i == num + 1) break;
  }
  return square;
}
function runProgram(input) {
  input = input.trim().split("\n").map(Number);
  let N = input[0];
  for (let i = 1; i <= N; i++) {
    let num = input[i];
    let Ans = findSqRoot(num) + "";
    Ans = Ans.trim().split(".").map(Number)
    console.log(Ans[0]);
  }
}
// Ans 2
//     2
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  4
  8`);
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