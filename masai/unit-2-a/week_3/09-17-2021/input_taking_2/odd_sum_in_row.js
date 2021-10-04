function evenSumArr(n, m, matrix) {
    for (let i = 0; i < n; i++) {
        var sum = 0
        for (let j = 0; j < m; j++) {
            if (matrix[i][j]%2!==0) {
                sum+=matrix[i][j]
            }
        }
        console.log(sum)
    }
}

function runProgram(input) {
    input = input.trim().split('\n')
    var [n, m] = input[0].trim().split(' ').map(Number)
    var matrix = []
    for (let i = 1; i <= n; i++) {
        matrix.push(input[i].trim().split(' ').map(Number))
    }
    evenSumArr(n, m, matrix)
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
  