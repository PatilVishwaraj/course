// Search in sorted and rotated array
var ans = -1;
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

function BS(K, arr, low, high) {
  while (low <= high) {
    // console.log(low, high)
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == K) {
      ans = mid;
      break;
    }
    if (low==high) {
      return
    }
    if (arr[mid] < K) {
      low = mid + 1;
    }
    if (arr[mid] > K) {
      high = mid;
    }
  }
}
function runProgram(input) {
  input = input.trim().split("\n");
  var [N, K] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let pivot = findPivot(arr, 0, N - 1);
  // console.log(pivot)

  if (pivot == 0) {
    BS(K, arr, 0, N - 1);
  } else {
    if (arr[0]<K && K<arr[pivot-1]) {
      BS(K, arr, 0, pivot - 1);
    } else {
      BS(K, arr, pivot, N - 1);
    }
  }
  console.log(ans);
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`6 6
  3 4 7 9 1 2`);
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
