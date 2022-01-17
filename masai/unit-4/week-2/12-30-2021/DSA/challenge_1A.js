function name(params) {
  
}


function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0]
  let strengths = input[1].trim().split(" ").map(Number);
  let calories = input[2].trim().split(" ").map(Number);
  console.log(N, strengths, calories)
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  3 1
  4 3`);
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
