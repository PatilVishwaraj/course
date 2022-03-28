// Decode the message
function runProgram(input) {
  input = input.trim().split("");
  let N = input.length
  let Ans = 0
  let count = 0
  let temp = input[0]
  for (let i = 0; i < N; i++) {
    if (input[i]==temp) {
      count++
    } else {
      if (Ans<count) {
        Ans = count
      }
      temp = input[i]
      count = 1
    }
  }
  if (Ans<count) {
    Ans = count
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
