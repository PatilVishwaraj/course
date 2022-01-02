function answer(arr, low, high, num) {
  let mid = Math.floor((low + high) / 2);
  while (low<=high) {
    if (arr[mid]==num) {
      return mid
    }
    if (arr[mid]<num) {
      low= mid
    }
    if (arr[mid]>num) {
      high= mid+1
    }
  }
  return answer(arr, low, high, num)
}


function runProgram(input) {
  input = input.trim().split("\n");
  var N = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  arr.sort()
  var Q = +input[2]
  for (let i = 3; i < 3+Q; i++) {
    let [com, num] = input[i].trim().split(" ").map(Number)
    console.log(answer(arr, 0, N-1, com, num))
  }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4
  1 2 3 4
  3
  0 5
  1 3
  0 3`);
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
