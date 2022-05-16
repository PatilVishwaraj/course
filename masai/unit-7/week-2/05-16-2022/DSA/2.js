// Power of 4
function runProgram(input) {
  let num = +input;
  let Ans = num**4
  console.log(Ans)
}
// Ans 81
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3`);
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