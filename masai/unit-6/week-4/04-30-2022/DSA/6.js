// Spirals and Diagonals
function spiralDiagonal(N, Arr) {
  if (N==1) {
    return Arr[0]
  }
  let i = 1;
  let j = N;
  let sum = 0
  while (i <= (N * N)) {
    if (i==j) {
      sum += Arr[i-1]
    } else {
      sum += Arr[i-1] + Arr[j-1]
    }
    i += N + 1;
    j += N - 1;
  }
  return sum
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0];
  for (let i = 1; i < tests * 2; i += 2) {
    let N = +input[i];
    let Arr = input[i + 1].trim().split(" ").map(Number);
     console.log(spiralDiagonal(N, Arr));
  }
}
// Ans 1
//     10
//     25
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3
  1
  1
  2
  1 2 3 4
  3
  1 2 3 4 5 6 7 8 9`);
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
