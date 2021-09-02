function swastikDiff(n, m, matrix) {
  var sum1 = 0
  var sum2 = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (j==Math.floor(m/2)) {
        sum1 += matrix[i][j]
      } if (i==0 && j> Math.floor(m/2)) {
        sum1 += matrix[i][j]
      } if (i==n-1 && j< Math.floor(m/2)) {
        sum1 += matrix[i][j]
      } if (i==Math.floor(n/2)) {
        sum2 += matrix[i][j]
      } if (j==0 && i< Math.floor(n/2)) {
        sum2 += matrix[i][j]
      }
       if (j==m-1 && i> Math.floor(n/2)) {
        sum2 += matrix[i][j]
      }
    }
  }
  var ans = sum1-sum2
  if (ans<0) {
    console.log(-ans)
  } else {
    console.log(ans)
  }
}

function runProgram(input) {
    input = input.trim().split('\n')
    var [n, m] = input[0].trim().split(' ').map(Number)
    var matrix = []
    for (let i = 1; i <= n; i++) {
      matrix.push(input[i].trim().split(' ').map(Number))
    }
    swastikDiff(n, m, matrix)
}

if (process.env.USERNAME === `PC`) {
  runProgram(``);
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
