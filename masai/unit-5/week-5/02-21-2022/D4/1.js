// d-Digit
function runProgram(input) {
  input = input.trim().split(" ");
  let arr = input[0].trim().split("").map(Number);
  let target = +input[1]
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]===target) {
      count++
    }
  }
  console.log(count)
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`124577 4`);
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
