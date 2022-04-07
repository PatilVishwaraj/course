//
function findMinumSum(arr, K, N) {
  let Ans = 0;
  let sum = 0
  for (let j = 0; j < K; j++) {
    sum += arr[j]
  }
  Ans = sum
  for (let i = 0; i < (N - K); i++) {
    sum = sum + arr[K+i] - arr[i] 
    
    if (sum<Ans) {
      Ans = sum
    }
  }
  return Ans
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0];
  for (let i = 1; i < tests*2; i+=2) {
    let [N, K] = input[i].trim().split(" ").map(Number);
    let arr = input[i+1].trim().split(" ").map(Number);
    console.log(findMinumSum(arr, K, N));
  }
}
// Ans
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  5 3
  9 9 -5 9 5 
  5 4
  2 7 6 2 -5 
  `);
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
