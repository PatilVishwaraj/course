function checkSymmetry(n, matrix) {
  var [v, h] = [0, 0]
  for (let i = 0; i < n/2; i++) {
    if (matrix[i]!==matrix[n-1-i]) {
      v = 1
    }
  }
  for (let i = 0; i < n/2; i++) {
    for (let j = 0; j < n/2; j++) {
      if (matrix[i][j]!==matrix[i][n-1-j]) {
        h = 1
      }
    }
  }



    if (v==0 && h==0) {
      console.log('BOTH')
    } else if (h==0) {
      console.log('VERTICAL')
    } else if (v==0) {
      console.log('HORIZONTAL')
    } else {
      console.log('NO')  
    }
}

function runProgram(input) {
    var input = input.trim().split("\n")
    for (let i = 1; i < input.length; i+=n+1) {
        var n = +input[i].trim()
        var matrix = []
        for (let j = i+1; j <= i+n; j++) {
            matrix.push(input[j].trim())
        }
        checkSymmetry(n, matrix)
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  