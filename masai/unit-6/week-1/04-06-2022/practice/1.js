// 
function list(N, arr) {
  
}
function runProgram(input) {
  input = input.trim().split("\n").map(Number);
  let tests = +input[0]
  for (let i = 1; i < tests*2; i+=2) {
    let N = +input[i];
    let arr = input[i+1].trim().split(" ").map(Number);
    list(N, arr)
  }
  
}
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3
  1
  2
  3
  2 0 1
  4
  2 0 2 1`);
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
