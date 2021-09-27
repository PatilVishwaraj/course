function runProgram(input) {
  input = input.trim().split('\n')
  var [n, m] = input[0].trim().split(' ').map(Number)
  var matrix = []
  for (let i = 1; i <=n; i++) {
    var row = input[i].trim().split(' ').map(Number)
    matrix.push(row)
  }
  for (let j = 0; j < n; j++) {
    console.log(matrix[j].join(' '))
  }
}

if (process.env.USERNAME === `PC`) {
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
