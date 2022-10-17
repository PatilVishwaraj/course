// Good Pairs
function countPairs(N, Arr) {
  let bag = {};
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (bag[Arr[i]]) {
      bag[Arr[i]]++;
    } else {
      bag[Arr[i]] = 1;
    }
  }
  for (const key in bag) {
    if (bag[2*key]) {
      count += (bag[key]*bag[2*key])
    }
  }
  return count;
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0];
  for (let i = 1; i < tests * 2; i += 2) {
    let N = +input[i];
    let Arr = input[i + 1].trim().split(" ").map(Number);
    console.log(countPairs(N, Arr));
  }
}
// Ans 0
// 8
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  5
  1 1 1 1 1
  6
  1 1 2 2 4 1`);
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
