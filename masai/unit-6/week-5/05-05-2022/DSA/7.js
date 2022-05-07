// Famous String Interleaving Problem
function runProgram(input) {
  input = input.trim().split("\n");
  let str_A = input[0].trim().split("")
  let str_B = input[1].trim().split("")
  let str_C = input[2
  ].trim().split("")
}
// Ans Yes
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`abcd
  xyz
  axybczd`);
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
