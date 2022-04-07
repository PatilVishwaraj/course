// 
function dp(N, arr) {
  if (N==0) return 0
  if (N==1) return arr[0]
  let temp = []
  temp[0] = arr[0]
  temp[1] = Math.max(arr[0], arr[1])
  for (let i = 2; i < N; i++) {
    temp[i] = Math.max(arr[i]+temp[i-2], temp[i-1])
  }
  return temp[N-1]
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0]
  for (let i = 1; i < tests*2; i+=2) {
    let N = +input[i];
    let arr = input[i+1].trim().split(" ").map(Number);
    console.log(dp(N, arr))
  } 
}
// Ans 
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3
  2
  1 100
  3
  2 100 99
  4
  100 1 1 100`);
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
