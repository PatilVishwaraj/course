// 
var X
function count(arr, left, right) {
  let mid = Math.floor((left+right)/2)
  if (arr[mid]==X) {
    let counter = 0
    for (let i = mid+1; i <= right; i++) {
      if (arr[i]==X) {
        counter++
      } else {
        break
      }
    }
    return counter
  }
  if (arr[mid]<X) {
    return count(arr, mid+1, right)
  }
  if (arr[mid]>X) {
    return count(arr, left, mid)
  }
}
function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0]
  let arr = input[1].trim().split(" ").map(Number)
  X = +input[2]
  console.log(count(arr, 0, N-1))
}
// Ans 
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`6
  1 1 1 2 2 2	
  1`);
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
