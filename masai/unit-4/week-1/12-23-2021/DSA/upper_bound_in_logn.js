// Upper Bound in LogN

var ans = -1;
function upperBoundLogN(arr, K, low, high) {
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] <= K) {
      low = mid + 1;
    } else {
      ans = mid;
      high = mid;
    }
    return upperBoundLogN(arr, K, low, high);
  }
  if (low == high) {
    ans = low;
  }
  console.log(ans);
  return;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [N, K] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  upperBoundLogN(arr, K, 0, N - 1);
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`7 7
  2 2 2 2 2 7 11`);
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
