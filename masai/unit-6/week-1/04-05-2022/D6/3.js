//
var Ans
var K 
var sum
function checkSum(arr, N, pointer, sum) {
  if (pointer == N) {
    return
  }
  if (sum==K) {
    Ans = "YES"
    return
  } else {checkSum(arr, N, pointer+1, sum)
  let temp = arr[pointer]
  sum += temp
  checkSum(arr, N, pointer+1, sum)
  sum -= temp}
  return
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0];
  for (let i = 1; i < tests * 2; i += 2) {
    let N = +input[i]-1;
    let arr = input[i + 1].trim().split(" ").map(Number);
    Ans = "No"
    sum = 0
    arr.sort((a, b) => a - b);
    K = arr.pop()
    checkSum(arr, N, 0, sum);
    console.log(Ans)
  }
}
// Ans Yes
//     Yes
//     No
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3
  3
  1 2 3
  4
  0 1 2 3
  4
  2 3 6 10`);
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
