// Rotate Elements
function rotateElement(N, Matrix) {
  let top = 0
  let left = 0
  let bottom = N-1
  let right = N-1
  let circles = Math.floor(N/2)
  for (let i = 0; i < circles; i++) {
    let temp = Matrix[i][i]
    for (let j = top; j < bottom; j++) {
      Matrix[j][left] = Matrix[j+1][left]
    }
    for (let j = left; j < right; j++) {
      Matrix[bottom][j] = Matrix[bottom][j+1]
    }
    for (let j = bottom; j > top; j--) {
      Matrix[j][right] = Matrix[j-1][right]
    }
    for (let j = right; j > left+1; j--) {
      Matrix[top][j] = Matrix[top][j-1]
    }
    Matrix[i][i+1] = temp
    left++
    top++
    bottom--
    right--
  }
}
function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0]
  let Matrix = []
  for (let i = 1; i <= N; i++) {
    let row = input[i].trim().split(" ").map(Number)
    Matrix.push(row)
  }
  rotateElement(N, Matrix)
  for (let i = 0; i < N; i++) {
    let row = Matrix[i].join(" ")
    console.log(row)
  }
}
// Ans 1 1 2 3
//     1 2 2 4
//     1 3 3 4
//     2 3 4 4
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`4
  1 2 3 4
  1 2 3 4
  1 2 3 4
  1 2 3 4`);
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
