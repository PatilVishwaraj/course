function findLength(str, curr) {
  if (str[curr] === undefined) {
    console.log(curr)
    return;
  } else {
    curr++;
    findLength(str, curr);
  }
}

function runProgram(input) {
  findLength(input, 0);
}

if (process.env.USERNAME === `PC`) {
  runProgram(`masaischool`);
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
