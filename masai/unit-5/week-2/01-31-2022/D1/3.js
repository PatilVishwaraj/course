// Long Queue
function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  let count;
  if (arr[0]) {
    count = 1;
  } else {
    count = 0;
  }
  for (let i = 1; i < N; i++) {
    if (arr[i] < arr[i - 1]) {
      count++;
    }
  }
  console.log(count);
}
// Ans 2
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`6
  1 2 4 3 5 8`);
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
