// Square Sorting
// https://oj.masaischool.com/contest/3180/problems
function squareSort(N, arr) {
  let Ans = {}
  for (let i = 0; i < N; i++) {
    let squar = arr[i]*arr[i]
    if (Ans[squar]) {
      let temp = Ans[squar] + " " + arr[i]
      Ans[squar] = temp
    } else {
      Ans[squar] = arr[i]
    }
  }
  let result = Object.values(Ans)
  console.log(result.join(" "))
}


function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0]
  for (let i = 1; i < tests*2; i+=2) {
    let N = +input[i]
    let arr = input[i+1].trim().split(" ").map(Number);
    squareSort(N, arr)
  }
}
// Ans 1 -2 3 -4 6
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`1
  7
  -2 3 1 -4 6 -3 2`);
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
