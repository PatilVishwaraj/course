function sumOfIndex(n, m, matrix) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      matrix[i][j]=(i+j)
    }
    console.log(matrix[i].join(' '))
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var [n, m] = input[0].trim().split(" ").map(Number);
  var matrix = [];
  for (let i = 1; i <= n; i++) {
    matrix.push(input[i].trim().split(" ").map(Number));
  }
  sumOfIndex(n, m, matrix)
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3 2
  1 2
  3 4
  5 6`);
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
