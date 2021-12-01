function checkSymmetry(n, matrix) {
  var h = 0
  var v = 0
  for (let i = 0; i < Math.ceil(n/2); i++) {
    if (matrix[i]!==matrix[n-i-1]) {
      v++
    }
    for (let j = 0; j < n; j++) {
      if (matrix[i][j]!==matrix[i][n-j-1]) {
        h++
      }
    }
  }
  if (v==0 && h==0) {
    console.log('YES')
  } else {
    console.log('NO')
  }
}


function runProgram(input) {
  input = input.trim().split('\n')
  for (let i = 1; i < input.length; i+=n+1) {
    var n = +(input[i].trim())
    var matrix = []
    for (let j = i+1; j < i+n+1; j++) {
      matrix.push(input[j].trim())
    }
    checkSymmetry(n, matrix)
  }

}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
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
