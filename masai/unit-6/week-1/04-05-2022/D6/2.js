// Cipher String
function cipher(N, arr) {
  let Ans = ""
  let count = 1
  for (let i = 0; i < N; i++) {
    if (arr[i]==arr[i+1]) {
      count++
    } else {
      Ans += arr[i] + count
      count = 1
    }
  }
  console.log(Ans)
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0]
  for (let i = 1; i < tests*2; i+=2) {
    let N = +input[i]
    let arr = input[i+1].trim().split("")
  // cipher(N, arr)
  }
}
// Ans a2b1c2
//     a2z1a2
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  5
  aabcc
  5
  aazaa`);
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
