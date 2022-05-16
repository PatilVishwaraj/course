// Opp Quick Sort
function oppQuickSort(arr) {
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
    return oppQuickSort(right).concat(pointer, oppQuickSort(left))
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var N = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  console.log(oppQuickSort(arr).join(" "));
}
// Ans 5 4 3 2 1
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`5
  2 3 1 4 5`);
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
    runProgram(read);g
    process.exit(0);
  });
}
