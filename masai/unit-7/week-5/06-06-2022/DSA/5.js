// National Award Ceremony
function arrange(N, Arr) {
  let bag = { 0: 0, 1: 0, 2: 0 };
  for (let i = 0; i < N; i++) {
    bag[Arr[i]]++;
  }
  let Ans = [];
  for (let i = 0; i < bag[0]; i++) {
    Ans.push(0);
  }
  for (let i = 0; i < bag[1]; i++) {
    Ans.push(1);
  }
  for (let i = 0; i < bag[2]; i++) {
    Ans.push(2);
  }
  return Ans.join(' ');
}
function runProgram(input) {
  input = input.trim().split('\n');
  let tests = +input[0];
  for (let i = 1; i < tests * 2; i += 2) {
    let N = +input[i];
    let Arr = input[i + 1].trim().split(' ').map(Number);
    console.log(arrange(N, Arr));
  }
}
// Ans 2
//     0 1 2
//     0 1 2 2
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3
  1
  2
  3
  2 0 1
  4
  2 0 2 1`);
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
