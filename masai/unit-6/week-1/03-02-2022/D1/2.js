// DpNation - is it a subsequence
function DpNation(s1, s2) {
  
}
function runProgram(input) {
  input = input.trim().split("\n");
  let test = input[0]
  for (let i = 1; i < test*2; i+=2) {
    let s1 = input[i]
    let s2 = input[i+1].trim().split("")
    console.log(DpNation(s1, s2))
  }
}
// Ans YES
//     NO
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  abc
  adbce
  ax
  xaa`);
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
