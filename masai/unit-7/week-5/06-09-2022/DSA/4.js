// Two sum
function findTwoSum(N, K, Arr) {
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      let sum = Arr[i] + Arr[j];
      if (sum == K) {
        let Ans = i + ' ' + j;
        return Ans;
      }
    }
  }
  return -1 + ' ' + -1;
}
function runProgram(input) {
  input = input.trim().split('\n');
  let tests = +input[0];
  for (let i = 1; i < tests * 2; i += 2) {
    let [N, K] = input[i].trim().split(' ').map(Number);
    let Arr = input[i + 1].trim().split(' ').map(Number);
    console.log(findTwoSum(N, K, Arr));
  }
}
// Ans 0 1
//     3 4
//     -1 -1
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3
  4 9
  2 7 11 15
  5 10
  1 2 3 5 5
  2 100
  48 49`);
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
