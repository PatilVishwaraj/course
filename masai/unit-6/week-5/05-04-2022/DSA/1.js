// Ways to zero
function ways(num) {
  if (num<0) return 0
  if (num==0) return 1
  return ways(num-1) + ways(num-2) + ways(num-5)
}
function runProgram(input) {
  input = input.trim().split("\n").map(Number);
  let N = +input[0]
  for (let i = 1; i <= N; i++) {
    let num = +input[i]
    console.log(ways(num))
  }
}
// Ans 5
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`1
  4`);
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
