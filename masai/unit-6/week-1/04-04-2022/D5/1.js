// First bigger
function firstBigger(N, arr, K) {
  let Ans = -1
  for (let i = 0; i < N; i++) {
    if (arr[i]>K) {
        Ans = arr[i]
        break
    }
  }
  return Ans
}
function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0]
  let arr = input[1].trim().split(" ").map(Number)
  let Q = +input[2]
  arr.sort((a, b) => a - b)
  for (let i = 3; i < 3+Q; i++) {
    let K = +input[i]
    console.log(firstBigger(N, arr, K))
  }
}
// Ans 66
//     63
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`10
  13 89 81 66 81 63 71 76 73 81
  2
  65
  15`);
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
