// 
var N
function reverse(row) {
  let temp = []
  for (let i = N-1; i >= 0; i--) {
    temp.push(row[i])
  }
  console.log(temp.join(" "))
}
function runProgram(input) {
  input = input.trim().split("\n");
  N = +input[0]
  for (let i = 1; i <= N; i++) {
    let row = input[i].trim().split(" ").map(Number)
    reverse(row)
  }
    
}
// Ans 
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4`);
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
