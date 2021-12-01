function runProgram(input) {
var [distance, time] = input.trim().split(' ').map(Number)
var speed = distance/time
if (speed > 40) {
  console.log('Apply Brake')
} else {
  console.log('Keep Going')
}
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`100 2`);
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
