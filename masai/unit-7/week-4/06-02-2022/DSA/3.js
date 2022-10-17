// Pair less than K
function findAns(N, Arr, K) {
  let Ans;
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      let sum = Arr[i] + Arr[j];
      if (sum < K) {
        if (Ans == undefined || Ans < sum) {
          Ans = sum;
        }
      }
    }
  }
  if (Ans == undefined) {
    return -1;
  } else {
    return Ans;
  }
}
function runProgram(input) {
  input = input.trim().split('\n');
  let tests = +input[0];
  for (let i = 1; i < tests * 3; i += 3) {
    let N = +input[i];
    let Arr = input[i + 1].trim().split(' ').map(Number);
    let K = +input[i + 2];
    console.log(findAns(N, Arr, K));
  }
}
// Ans 6
//     -1
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  5
  1 2 3 4 5
  7
  3
  30 10 20
  15`);
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
