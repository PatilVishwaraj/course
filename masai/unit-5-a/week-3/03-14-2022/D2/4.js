// 
var ans
function answer(arr, sum, pointer, N) {
  if (pointer>=N) {
    return
  }
  if (sum>ans) {
    ans = sum
  }
  for (let i = pointer; i < N; i++) {
    sum += arr[i]
    answer(arr, sum, pointer+2, N)
    sum -= arr[i]
  }
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0]
  for (let i = 1; i < tests*2; i+=2) {
    ans = 0
    let N = +input[i]
    let arr = input[i+1].trim().split(" ").map(Number)
    answer(arr, 0, 0, N)
    console.log(ans)
  }
}
// Ans 100
//     101
//     200
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
