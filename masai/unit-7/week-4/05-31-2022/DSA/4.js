// Search Numbers
function countBetween(N, Arr, Left, Rigth) {
  let start;
  let end;
  for (let i = 0; i < N; i++) {
    if (Arr[i] >= Left) {
      start = i;
      break;
    }
  }
  for (let j = N - 1; j >= 0; j--) {
    if (Arr[j] <= Rigth) {
      end = j;
      break;
    }
  }
  return end - start + 1;
}
function runProgram(input) {
  input = input.trim().split('\n');
  let N = +input[0];
  let Arr = input[1].trim().split(' ').map(Number);
  let K = +input[2];
  let Ans = [];
  Arr.sort((a, b) => a - b);
  for (let i = 3; i < K + 3; i++) {
    let [Left, Rigth] = input[i].trim().split(' ').map(Number);
    Ans.push(countBetween(N, Arr, Left, Rigth));
  }
  console.log(Ans.join(' '));
}
// Ans 0 0

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3
  13 12 -19
  2
  18 18
  -12 -4`);
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
