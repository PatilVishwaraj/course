// Spirally Traversing a Matrix
function spiralTraverse4(N, matrix) {
  var top = 0
  var left = 0
  var right = N-1
  var bottom = N-1
  var ans = []
  for (let i = 0; i < Math.ceil(N/2); i++) {
      for (let j = left; j <= right; j++) {
          ans.push(matrix[top][j])
      }
      top++
      for (let j = top; j <= bottom; j++) {
          ans.push(matrix[j][right])
      }
      right--
      for (let j = right; j >= left; j--) {
          ans.push(matrix[bottom][j])
      }
      bottom--
      for (let j = bottom; j >= top; j--) {
          ans.push(matrix[j][left])
      }
      left++
  }
  console.log(ans.join(' '))
}
function runProgram(input) {
  var array = input.trim().split("\n")
  var N = +array[0]
  var matrix = []
  for (let i = 1; i <= N; i++) {
    let row = array[i].trim().split(" ").map(Number)
    matrix.push(row)
  }
  spiralTraverse4(N, matrix)
  
}
// Ans 1 2 3 4 8 4 8 7 6 5 1 5 6 7 3 2
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4
  1 2 3 4
  5 6 7 8
  1 2 3 4
  5 6 7 8`);
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
