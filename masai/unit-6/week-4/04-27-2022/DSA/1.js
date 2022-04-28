// Majority element
function findMajority(N, Arr) {
  let ans = -1;
  let X = Math.floor(N / 2);
  for (let i = 0; i < N - X; i++) {
    if (Arr[i] == Arr[i + X]) {
      ans = Arr[i];
    }
  }
  return ans;
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0];
  for (let i = 1; i < tests * 2; i += 2) {
    let N = +input[i];
    let Arr = input[i + 1].trim().split(" ").map(Number);
    console.log(findMajority(N, Arr));
  }
}
// Ans 1
//     -1
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  6
  1 1 1 1 2 3
  5
  1 1 2 2 3`);
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
