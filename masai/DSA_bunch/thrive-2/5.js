// Array Parts of Four
function APF(N, Arr) {
  let c1 = 0;
  let c2 = 0;
  let c3 = 0;
  let c4 = 0;

  for (let i = 0; i < N / 4; i++) {
    c1 += Arr[i];
  }
  for (let j = N / 4; j < N / 2; j++) {
    c2 += Arr[j];
  }
  for (let k = N / 2; k < (3 * N) / 4; k++) {
    c3 += Arr[k];
  }
  for (let l = (3 * N) / 4; l < N; l++) {
    c4 += Arr[l];
  }

  let result = 2 * c1 + c2 + 2 * c3 + c4;
  return result;
}
function runProgram(input) {
  input = input.trim().split('\n');
  let N = +input[0];
  let Arr = input[1].trim().split(' ').map(Number);
  console.log(APF(N, Arr));
}
// Ans 50
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
