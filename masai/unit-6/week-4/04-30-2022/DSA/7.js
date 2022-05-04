// CID Investigation
function runProgram(input) {
  input = input.trim().split("\n").map(Number);
  
}
// Ans aa
//     ab
//     ac
//     ba
//     bb
//     bc
//     ca
//     cb
//     cc
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`22`);
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
