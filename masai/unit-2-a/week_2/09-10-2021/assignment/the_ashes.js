function runProgram(input) {
  input = input.trim().split(" ").map(Number);
  var Australia = input[0];
  var England = input[1];
  if (Australia > England) {
    console.log("Australia");
  } else if (Australia < England) {
    console.log("England");
  } else {
    console.log("Tie");
  }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`46 67`);
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
