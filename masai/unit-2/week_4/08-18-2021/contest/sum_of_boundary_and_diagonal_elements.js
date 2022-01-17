function sumOfBandD(n, matrix) {
  var sum = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i==0 || i==n-1 || j==0 || j==n-1 || i==j || (i+j)==n-1) {
        sum += (matrix[i][j])
      }
      
    }
  }
  console.log(sum)

}


function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    var matrix = []
    for (let i = 1; i <= n; i++) {
      matrix.push(input[i].trim().split(' ').map(Number))
    }
    sumOfBandD(n, matrix)
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`5
  1 2 3 4 5
  6 7 8 9 1
  2 3 4 5 6
  7 8 9 1 2
  3 4 5 6 7`);
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
