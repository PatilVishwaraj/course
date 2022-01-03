// The Peak Point
function findPeak(arr, start, end) {
  while (start <= end) {
    let Peak = Math.floor((start + end) / 2);
    if (arr[Peak] > arr[Peak - 1] && arr[Peak] > arr[Peak + 1]) {
      return Peak;
    }
    if (start == end) {
      return 0;
    }
    if (arr[start] < arr[Peak]) {
      start = Peak-1;
    }
    if (arr[Peak] < arr[end]) {
      end = Peak;
    }
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let tests = +input[0];
  for (let i = 1; i < tests * 2; i += 2) {
    let N = +input[i];
    let arr = input[i + 1].trim().split(" ").map(Number);
    console.log(findPeak(arr, 0, N - 1));
  }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  3
  10 20 11
  5
  1 3 6 5 4`);
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
