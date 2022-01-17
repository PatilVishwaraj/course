function sandhyaSteps(steps) {
  
  if (steps == 0) {
    return 1;
  }
  if (steps < 0) {
    return 0;
  } else {
    return (
      sandhyaSteps(steps - 1) +
      sandhyaSteps(steps - 2) +
      sandhyaSteps(steps - 3)
    );
  }
}

function runProgram(input) {
  input = +input;
  console.log(sandhyaSteps(input));
}

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
