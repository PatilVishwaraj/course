function rotate(n, matrix) {
    for (let i = n-1; i >= 0; i--) {
        var row = []
        for (let j = 0; j < n; j++) {
            row.push(matrix[j][i])
        }
        console.log(row.join(' '))
    }
}


function runProgram(input) {
    var input = input.trim().split("\n")
    var n = +input[0].trim()
    var matrix = []
    for (let j = 1; j <= n; j++) {
        matrix.push(input[j].trim().split(" ").map(Number))
    }
    rotate(n, matrix)
  
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    13 14 15 16`);
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
  