// Ash and his Redemption
function checkWin(N, Arr_1, Arr_2) {
  for (let i = 0; i < N; i++) {
    if (Arr_1[i] <= Arr_2[i]) {
      return 'Train Hard Again';
    }
  }
  return 'Ash Finally Wins';
}
function runProgram(input) {
  input = input.trim().split('\n');
  let tests = +input[0];
  for (let i = 1; i < tests * 3; i += 3) {
    let N = +input[i];
    let Arr_1 = input[i + 1].trim().split(' ').map(Number);
    let Arr_2 = input[i + 2].trim().split(' ').map(Number);
    Arr_1.sort((a, b) => a - b);
    Arr_2.sort((a, b) => a - b);
    console.log(checkWin(N, Arr_1, Arr_2));
  }
}
// Ans Train Hard Again
//     Train Hard Again
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  3
  12 3 4
  5 4 1
  2
  1 5
  1 4`);
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
