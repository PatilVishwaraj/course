// Generate all substrings
function GenerateAllSubstrings(N, str, Ans) {
  if ((str = '')) {
  }
}
function runProgram(input) {
  input = input.trim().split('\n');
  let tests = +input[0];
  for (let i = 0; i < tests * 2; i += 2) {
    let N = +input[i];
    let str = input[i + 1].trim().split('');
    GenerateAllSubstrings(N, str, '');
  }
}
// Ans a
//     am
//     ama
//     aman
//     m
//     ma
//     man
//     a
//     an
//     n
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`1
  4 
  aman`);
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
