// 
function makeZeros(N, arr) {
  let Ans = "NO"
  for (let i = 0; i < N-1; i++) {
    if (arr[i]>arr[i+1]) {
      return Ans
    }
    let temp = arr[i]
    arr[i] -= temp
    arr[i+1] -= temp
    if (arr[i+1]<0) {
      return Ans
    }
  }
  if (arr[N-1]!==0) {
    return Ans
  }
  return "YES"
}
function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0]
  let arr = input[1].trim().split(" ").map(Number)
  console.log(makeZeros(N, arr))
}
// Ans YES
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  2 2`);
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
