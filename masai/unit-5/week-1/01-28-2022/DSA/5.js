// Even Count Returns
function runProgram(input) {
  input = input.trim().split("").map(Number);

  let ans = []
  let count = 0
  for (let i = input.length-1; i >= 0; i--) {
    if (input[i]%2==0) {
      count++
    }
    ans.unshift(count)
  }
  console.log(ans.join(' '))
    
}
// Ans 7 7 7 6 5 5 4 4 3 2 1 1
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`574674546476`);
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
