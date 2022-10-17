// ACM ICPC India Rank
function runProgram(input) {
  input = input.trim().split('\n');
  let N = +input[0];
  for (let i = 0; i <= N; i++) {
    input[i] = input[i].trim();
    if (input[i] === 'India') {
      console.log(i);
      break;
    }
  }
}
// Ans 5
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`5
  Russia
  USA
  Japan
  China
  India`);
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
