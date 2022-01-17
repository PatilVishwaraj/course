function checkSymetry(n, matrix) {
    var h_symtry = true
    var v_symtry = true
    var m = matrix[0].length
    for (let i = 0; i < n; i++) {
        if (h_symtry && matrix[i]!==matrix[n-1-i]) {
            h_symtry = false
        }
        for (let j = 0; j < m && v_symtry; j++) {
            if (matrix[i][j]!==matrix[i][m-1-j]) {
                v_symtry = false
            }
        }
    }
    if () {
        
    } else if () {
        
    } else
}


function runProgram(input) {
  input = input.trim().split("\n");

  for (let i = 1; i < input.length; i += n + 1) {
    var n = +input[i];
    var matrix = [];
    for (let j = i + 1; j <= i + n; j++) {
      matrix.push(input[j].trim());
    }
    checkSymetry(n, matrix)
  }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`3
  4
  *.*.
  .*.*
  *.*.
  .*.*
  3
  .*.
  *.*
  .*.
  3
  ..*
  **.
  ..*`);
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
