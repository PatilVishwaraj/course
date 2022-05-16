// Rotate Elements
function rotateMatrix(N, Matrix) {
  let top = 0
  let left = 0
  let bottom = N-1
  let rigth = N-1
  let rings = Math.floor(N/2)
  for (let i = 0; i < rings; i++) {
    let temp = Matrix[i][i]
    for (let j = top; j < bottom; j++) {
      Matrix[j][left] = Matrix[j+1][left]
    } 
    for (let j = left; j < rigth; j++) {
      Matrix[bottom][j] = Matrix[bottom][j+1]
    } 
    for (let j = bottom; j > top; j--) {
      Matrix[j][rigth] = Matrix[j-1][rigth]
    }
    for (let j = rigth; j > left+1; j--) {
      Matrix[top][j] = Matrix[top][j-1]
    }
    Matrix[i][i+1] = temp
    left++
    bottom--
    rigth--
    top++
  }
  Matrix.map(el => {
    console.log(el.join(" "))
  })
}
function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0]
  let Matrix = []
  for (let i = 1; i <= N; i++) {
    let row = input[i].trim().split(" ").map(Number)
    Matrix.push(row)
  }
  rotateMatrix(N, Matrix)
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
