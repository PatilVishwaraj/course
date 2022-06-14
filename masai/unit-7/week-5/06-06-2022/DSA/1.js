// Majority element
function findMajority(N, Arr) {
  let count = 0;
  for (let i = 0; i < N - X; i++) {
    if (Arr[i] == Arr[i + X]) {
      count++;
    }
  }
  return count;
}
function runProgram(input) {
  input = input.trim().split('\n');
  let tests = +input[0];
  for (let i = 1; i < tests * 2; i += 2) {
    let N = +input[i];
    let Arr = input[i + 1].trim().split(' ').map(Number);
    console.log(findMajority(N, Arr));
  }
}
// Ans 1
//     -1
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  9
  4 10 2 8 4 7 5 4 4
  4
  3 9 3 7`);
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
