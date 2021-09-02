function runProgram(input) {
  input = +input
  var steps = 0
  for (let i = 5; i > 0; i--) {
    if (input >= i) {
      steps += Math.floor(input/i)
      input -= (Math.floor(input/i))*i
    }
  }
  console.log(steps)
}
if (process.env.USERNAME === `PC`) {
  runProgram(`34`);
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
