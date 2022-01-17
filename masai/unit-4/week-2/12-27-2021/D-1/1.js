function CTO(arr, low, high) {
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] == 1 && arr[mid - 1] == 0) {
    return mid;
  }
  if (low == high) {
    return -1;
  }
  if (arr[mid] == 1) {
    high = mid;
  }
  if (arr[mid] == 0) {
    low = mid + 1;
  }
  return CTO(arr, low, high);
}

function runProgram(input) {
  input = input.trim().split("\n");
  var N = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  console.log(CTO(arr, 0, N - 1));
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`5
  0 0 0 0 1`);
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
