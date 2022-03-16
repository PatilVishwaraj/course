// Who is going Forward?
function getResult(N, K, arr) {
  let count = 0
  if (N==K) {
    return K
  }
  if (arr[K-1]>0) {
    for (let i = K; i < N; i++) {
      if (arr[K-1]==arr[i]) {
        count++
      }else {
        break
      }
    }
    return K + count
  } else {
    for (let i = 0; i < K; i++) {
      if (arr[i]>0) {
        count++
      }
    }
    return count
  }
}
function runProgram(input) {
  input = input.trim().split("\n");
  let [N, K] = input[0].trim().split(" ").map(Number)
  let arr = input[1].trim().split(" ").map(Number)
  console.log(getResult(N, K, arr))
}
// Ans 6
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`8 5
  10 9 8 7 7 7 5 5`);
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
