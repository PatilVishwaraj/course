function runProgram(input) {
input = input.trim().split('\n')
var info = input[0].trim().split(' ').map(Number)
var n = info[0]
var k = info[1]
var array = input[1].trim().split(' ').map(Number)
console.log(n)
console.log(k)
console.log(array)
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4 3
  2 3 4 6`);
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
