// smaller than target
function find(N, K, arr) {
  let count = 0
  for (let i = 0; i < N-2; i++) {
    for (let j = i+1; j < N-1; j++) {
      for (let k = j+1; k < N; k++) {
        console.log(arr[i] ,arr[j] ,arr[k])
        let sum = arr[i] + arr[j] + arr[k]
        if (sum<K) {
          count++
        }
      }
    }
  }
  console.log(count)
}
function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0]
  for (let i = 1; i < tests*2; i++) {
    let [N, K] = input[i].trim().split(" ").map(Number)
    let arr = input[i+1].trim().split(" ").map(Number)
    find(N, K, arr)
  }
}
// Ans 2
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`1
  4 2
  0 0 1 1`);
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
