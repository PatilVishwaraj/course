// Easy but recursion
function recursiveSum(N, Arr, sum) {
  if (N==0) return sum
  sum += Arr[N-1]
  return recursiveSum(N-1, Arr, sum)
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0]
  for (let i = 1; i < tests*2; i+=2) {
    let N = +input[i]
    let Arr = input[i+1].trim().split(" ").map(Number)
    console.log(recursiveSum(N, Arr, 0))
  }
}
// Ans 15
//     -7
//     3
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3
  5
  6 3 8 2 -4
  5
  -10 -7 10 2 -2
  5
  -4 -5 6 -3 9`);
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
