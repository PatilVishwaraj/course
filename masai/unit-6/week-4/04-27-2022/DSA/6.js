// Maximum Occurring Element
function maximumOccuringElement(A,N){
  for (let i = 0; i < N; i++) {
    
  }
}
function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0]
  let A = input[1].trim().split(" ").map(Number);
  maximumOccuringElement(A,N)
}
// Ans 0
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`5
  0 2 0 6 9`);
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
