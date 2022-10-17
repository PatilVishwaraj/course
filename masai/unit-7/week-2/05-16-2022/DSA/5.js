// Number of ways problems Returns
var ans = {};
function ways(num) {
  if (num < 0) return 0;
  if (num == 0) return 1;
  if (ans[num] == undefined) {
    ans[num] = ways(num - 1) + ways(num - 2) + ways(num - 3);
  }
  return ans[num];
}
function runProgram(input) {
  num = +input;
  console.log(ways(num));
}
// Ans 7
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4`);
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
