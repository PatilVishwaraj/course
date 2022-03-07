// Parity Check
function diff(A,B) {
  let C
  if (A>B) {
    C = A-B
  } else {
    C = B-A
  }
  return C
}
function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0]
  let arr = input[1].trim().split(" ").map(Number);
  let odd = 0
  let even = 0
  let Ans
  for (let i = 0; i < N; i++) {
    if (arr[i]%2==0) {
      even++
    } else {
      odd++
    }
  }
  Ans = diff(even,odd)
  console.log(Ans)
}
// Ans 1
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`8
  1 2 3 4 5 6 7 8`);
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
