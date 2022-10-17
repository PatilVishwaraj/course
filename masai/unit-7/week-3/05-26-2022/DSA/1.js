// Fixing Maze
function runProgram(input) {
  input = input.trim().split('\n').map(Number);
}
// Ans 1
//     3
//     9
//     0
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4
  3 3
  RRD
  DDR
  RRC
  1 4
  DDDC
  6 9
  RDDDDDRRR
  RRDDRRDDD
  RRDRDRRDR
  DDDDRDDRR
  DRRDRDDDR
  DDRDRRDDC
  1 1
  C`);
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
