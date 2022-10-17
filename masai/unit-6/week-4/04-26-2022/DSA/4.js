// Rotate Elements
function rotate(n, matrix) {
  var top = 0;
  var left = 0;
  var right = n - 1;
  var bottom = n - 1;
  for (let k = 0; k < Math.floor(n / 2); k++) {
    var temp = matrix[k][k];
    for (let i = top; i < bottom; i++) {
      matrix[i][left] = matrix[i + 1][left];
    }
    for (let i = left; i < right; i++) {
      matrix[bottom][i] = matrix[bottom][i + 1];
    }
    for (let i = bottom; i > top; i--) {
      matrix[i][right] = matrix[i - 1][right];
    }
    for (let i = right; i > left; i--) {
      matrix[top][i] = matrix[top][i - 1];
    }
    matrix[k][k + 1] = temp;
    left++;
    bottom--;
    right--;
    top++;
  }
  for (let i = 0; i < n; i++) {
    console.log(matrix[i].join(' '));
  }
}

function runProgram(input) {
  var input = input.trim().split('\n');
  var n = +input[0];
  var matrix = [];
  for (let i = 1; i <= n; i++) {
    matrix.push(input[i].trim().split(' '));
  }
  rotate(n, matrix);
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
