function rotate(n, matrix) {
    for (let i = 0; i < Math.floor(n/2); i++) {
        for (let j = i; j < n-i-1; j++) {
            var temp = matrix[i][j]
            matrix[i][j] =  matrix[n-j-1][i]
            matrix[n-j-1][i] =  matrix[n-i-1][n-j-1]
            matrix[n-i-1][n-j-1] =  matrix[j][n-i-1]
            matrix[j][n-i-1] =  temp
        }
    }
    for (let i = 0; i < n; i++) {
        console.log(matrix[i].join(' '))
    }
}

function runProgram(input) {
    var input = input.trim().split("\n")
    var n = +input[0]
    var matrix = []
    for (let i = 1; i <= n; i++) {
        matrix.push(input[i].trim().split(" "))
        
    }
    rotate(n, matrix)
  
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`5
    1 2 3 4 5
    6 7 8 9 10
    11 12 13 14 15
    16 17 18 19 20
    21 22 23 24 25`);
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
  