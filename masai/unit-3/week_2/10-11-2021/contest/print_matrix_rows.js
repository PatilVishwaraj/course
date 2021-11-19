function printEvenRow(n, m, matrix) {
  for (let i = 0; i < n; i++) {
    if (i%2==0) {
      console.log(matrix[i].join(' '))
    }
  }
}

function runProgram(input) {
    input = input.trim().split('\n')
    var [n, m] = input[0].trim().split(' ').map(Number)
    var matrix = []
    for (let i = 1; i <= n; i++) {
      let row = input[i].trim().split(' ').map(Number)
      matrix.push(row)
    }
    printEvenRow(n, m, matrix)
  }
  
  if (process.env.USERNAME === `PC`) {
    runProgram(`3 3
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
  