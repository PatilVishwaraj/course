// Decode the message
function runProgram(input) {
  input = input.trim().split("");
  if (input.length<1) {
    Ans = 0
  } else {
    var count = 1   
    var Ans = 1
    for (let i = 0; i < input.length-1; i++) {
      if (input[i]===input[i+1]) {
        count++
      } else {
        if (Ans<count) {
          Ans = count
        }
        count = 1
      }
    }
    if (Ans<count) {
      Ans = count
    }
  }
  console.log(Ans) 
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
