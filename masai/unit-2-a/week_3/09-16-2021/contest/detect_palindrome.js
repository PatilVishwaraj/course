function runProgram(input) {
  input = input.trim()
  var N = input.length
  var ans = "Yes"
for (let i = 0; i < Math.floor(N/2); i++) {
  if (input[i]!==input[N-1-i]) {
    ans = "No"
  }
}
console.log(ans)
}

if (process.env.USERNAME === `PC`) {
  runProgram(`1221`);
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
