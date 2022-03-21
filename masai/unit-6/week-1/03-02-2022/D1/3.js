// Shop Soap
function soap(num, N, arr) {
  let count = 0
  for (let i = 0; i < N; i++) {
    if (arr[i]<num) {
      count++
    } else {
      break
    }
  }
  console.log(count)
}
function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0]
  let arr = input[1].trim().split(" ").map(Number)
  arr.sort((a,b)=> a-b)
  let Q = +input[2]
  for (let i = 3; i < 3+Q; i++) {
    let num = +input[i]
    soap(num, N, arr)
  }
}
// Ans 1
//     1
//     2
//     5
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`5
  1 4 10 5 6
  4
  2
  3
  5
  11`);
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
