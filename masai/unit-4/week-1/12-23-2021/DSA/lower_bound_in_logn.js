// Lower bound in logn

function lowerBoundLogN(arr, K, start, end) {
  let con1 = arr[start] < K && arr[end] < K;
  let con2 = arr[start] > K && arr[end] > K;
  if (con1 || con2) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] == K) {
    while (arr[mid] == arr[mid - 1]) {
      mid--;
    }
    return mid;
  }
  if (arr[mid] > K) {
    end = mid;
  }
  if (arr[mid] < K) {
    start = mid + 1;
  }
  return lowerBoundLogN(arr, K, start, end);
}

function runProgram(input) {
  input = input.trim().split("\n");
  let [N, K] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  console.log(lowerBoundLogN(arr, K, 0, N - 1));
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`10 10
  0 2 4 4 5 5 7 7 9 10`);
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
