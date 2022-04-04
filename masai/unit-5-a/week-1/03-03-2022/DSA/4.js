// Spirals Traversal II
function spiral2(N, matrix) {
  let center = Math.ceil(N/2)
  let top = 0
  let left = 0
  let bottom = N-1
  let right = N-1
  let Ans = []
  while (top<=bottom && left<=right) {
    for (let i = left; i <= right; i++) {
      Ans.push(matrix[bottom][i])
    }
    bottom--
    for (let i = bottom; i >= top; i--) {
      Ans.push(matrix[i][right])
    }
    right--
    for (let i = right; i >= left; i--) {
      Ans.push(matrix[top][i])
    }
    top++
    for (let i = top; i <= bottom; i++) {
      Ans.push(matrix[i][left])
    }
    left++
  }
  console.log(Ans.join(" "))
}

function runProgram(input) {
  input = input.trim().split("\n");
  let test = +input[0]
  let N
  for (let i = 1; i < input.length; i+=N+1) {
    N = +input[i]
    let matrix = []
    for (let j = i+1; j <= i+N; j++) {
      matrix.push(input[j].trim().split(" ").map(Number))
    }
    spiral2(N, matrix)
  }
}
// Ans 
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`1
  3 
  1 2 3
  4 5 6
  7 8 9`);
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
