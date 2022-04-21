// Generate all subsequence
function generateAllSubsequence(N, arr, curr, ans) {
  if (true) {
    
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0]
  let arr = input[1].trim().split("")
  generateAllSubsequence(N, arr, 0, [])

}
// Ans a
//     ab
//     abc
//     abcd
//     abd
//     ac
//     acd
//     ad
//     b
//     bc
//     bcd
//     bd
//     c
//     cd
//     d
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4
  abcd`);
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
