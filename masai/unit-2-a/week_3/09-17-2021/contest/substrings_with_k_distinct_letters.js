function runProgram(input) {
input = input.trim().split('\n')
var [n, k] = input[0].trim().split(' ').map(Number)
var str = input[1].trim()
console.log(n)
console.log(k)
console.log(str)
}

if (process.env.USERNAME === `PC`) {
  runProgram(`4 2
  abcc`);
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
