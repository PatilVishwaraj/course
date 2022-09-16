// Palindrome Number
function runProgram(input) {
  let x = input.trim().split('').map(Number);
  let N = x.length;
  console.log(N);
}
// Ans true
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`121`);
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
