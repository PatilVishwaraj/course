//
function powerOfStr(N, str) {
  let [x,y] = [0,0]
  for (let i = 0; i < N; i++) {
    if (str[i]==`a` || str[i]==`e` || str[i]==`i` || str[i]==`o` || str[i]==`u`) {
      x++
    } else {
      y++
    }
  }
  console.log(5*x + 2*y)
}

function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0];
  let str = input[1].trim();
  powerOfStr(N, str);
}
// Ans 14
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4
  aman`);
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
