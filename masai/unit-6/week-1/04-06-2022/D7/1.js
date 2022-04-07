// String Cut
function runProgram(input) {
  let arr = input.trim().split("");
  let N = arr.length;
  let half = Math.floor(N / 2);
  let left = "";
  let right = "";
  let Ans = "";
  for (let i = 0; i < half; i++) {
    left = arr[i] + left;
    right += arr[N - 1 - i];
  }

  if (N % 2) {
    Ans = left + arr[half] + right;
  } else {
    Ans = left + right;
  }
  console.log(Ans);
}
// Ans
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`abcdxyz`);
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
