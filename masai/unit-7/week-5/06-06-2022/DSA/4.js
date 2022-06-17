// Segregation of Odd & Even
function Segregation(N, Q, Arr) {
  let Even = [];
  let Odd = [];
  for (let i = 0; i < N; i++) {
    if (Arr[i] % 2) {
      Odd.push(Arr[i]);
    } else {
      Even.push(Arr[i]);
    }
  }
  if (Q == 1) {
    return Even.concat(Odd);
  } else if (Q == 2) {
    return Odd.concat(Even);
  }
}
function runProgram(input) {
  input = input.trim().split('\n');
  let tests = +input[0];
  for (let i = 1; i < tests * 3; i += 3) {
    let N = +input[i];
    let Arr = input[i + 1].trim().split(' ').map(Number);
    let Q = +input[i + 2];
    console.log(Segregation(N, Q, Arr).join(' '));
  }
}
// Ans 2 4 1 3 5
//     1 3 5 2 4
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  5
  1 2 3 4 5
  1
  5
  1 2 3 4 5
  2`);
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
