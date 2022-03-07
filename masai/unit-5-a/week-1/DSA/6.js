// Height of trees
function increasingTrees(N, arr) {
  let top = 0
  let count = 0
  for (let i = 0; i < N; i++) {
    if (arr[i]>top) {
      count++
      top = arr[i]
    }
  }
  return count
}
function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0]
  let arr = input[1].trim().split(" ").map(Number)
  console.log(increasingTrees(N, arr))
}
// Ans 6
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`9
  10 22 9 33 21 50 41 60 80`);
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
