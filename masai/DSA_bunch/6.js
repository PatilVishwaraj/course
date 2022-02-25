// Longest Repeated Odd
function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0]
  let arr = input[1].trim().split(" ").map(Number);
  let Ans = 0
  let count = 0
  for (let i = 1; i < N; i++) {
    if (arr[i]%2!=0 && arr[i-1]==arr[i]) {
      count++
    } else {
      if (count>Ans) {
        Ans = count
      }
      if (arr[i]%2!=0) {
        count = 1
      } else {
        count = 0
      }
      console.log(count)
    }
  }
  if (count>Ans) {
    Ans = count
  }
  console.log(Ans)
}
// Ans 4
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`12
  1 1 1 3 3 3 3 3 1 1 1 1`);
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
