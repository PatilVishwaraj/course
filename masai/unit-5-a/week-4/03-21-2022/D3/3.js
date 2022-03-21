// 
function findMissing(arr, left, right) {
  let mid = Math.ceil((left+right)/2)
  if (left==right) {
    return left+1
  }
  if (arr[left]!==left) {
    return left
  }
  if (arr[mid]!==mid && arr[mid-1]==mid-1) {
    return mid
  }


  if (arr[mid]==mid) {
    return findMissing(arr, mid, right)
  } else {
    return findMissing(arr, left, mid)
  }
}
function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0]
  for (let i = 1; i <= N; i++) {
    let arr = input[i].trim().split(" ").map(Number)
    console.log(findMissing(arr, 0, 9))
  }
}
// Ans 
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
0 1 2 4 5 6 9 10 11 12 
0 1 2 3 4 5 6 7 8 9 `);
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
