// Decode the message
function runProgram(input) {
  input = input.trim().split("");
  console.log(input)
  var count = 0
  var Ans = 1
  for (let i = 0; i < input.length-1; i++) {
    if (input[i]===input[i+1]) {
      count++
    } else {
      if (Ans>count) {
        
      }
    }
  }
  console.log(count)
}
// Ans 3
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`ATTCGGGA`);
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
