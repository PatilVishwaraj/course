// Decipher String
function decode(N, Arr) {
  let Ans = '';
  for (let i = 0; i < N; i += 2) {
    let character = Arr[i];
    let num = Arr[i + 1];
    for (let j = 0; j < num; j++) {
      Ans += character;
    }
  }
  return Ans;
}
function runProgram(input) {
  input = input.trim().split('\n');
  let tests = +input[0];
  for (let i = 1; i < tests * 2; i += 2) {
    let N = +input[i];
    let Arr = input[i + 1].trim().split('');
    console.log(decode(N, Arr));
  }
}
// Ans aabcc
//     aazaa
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  6
  a2b1c2
  6
  a2z1a2`);
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
