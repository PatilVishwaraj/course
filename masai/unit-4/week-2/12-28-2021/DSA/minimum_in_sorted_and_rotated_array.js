// Minimum in sorted & rotated array
function findPivot(arr, start, end) {
  while (start <= end) {
    let point = Math.floor((start + end) / 2);
    if (arr[point] < arr[point - 1]) {
      return point;
    }
    if (start == end) {
      return 0;
    }
    if (arr[start] < arr[point]) {
      start = point;
    }
    if (arr[point] < arr[end]) {
      end = point;
    }
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var [N, K] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let pivot = findPivot(arr, 0, N - 1);

  console.log(arr[pivot]);
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`10
  2 2 2 2 2 2 2 1 2 2`);
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
