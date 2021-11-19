function quickSortReverse(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    var left = [];
    var right = [];
    var pointer = arr.pop();
    var N = arr.length;
    for (let i = 0; i < N; i++) {
      if (arr[i] <= pointer) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    // return quickSortReverse(right).concat(pointer, quickSortReverse(left))
    return quickSortReverse(left).concat(pointer, quickSortReverse(right));
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var N = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  console.log(quickSortReverse(arr).join(" "));
}

if (process.env.USERNAME === `Admin`) {
  runProgram(``);
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
