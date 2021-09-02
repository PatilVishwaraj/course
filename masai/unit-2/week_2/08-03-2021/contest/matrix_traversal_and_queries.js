function spiral(row, col, q, matrix) {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            matrix[i][j]
        }
    }
}

function runProgram(input) {
    var array = input.trim().split("\n")
    for (let i = 1; i < array.length; i+=row+1) {
        var matrix = []
        var data = array[i].trim().split(' ').map(Number)
        var row = data[0]
        var col = data[1]
        var q = data[2]
        var start = 1+i
        for (let j = start; j < start+row; j++) {
            matrix.push(array[j])
        }
        spiral(row, col, q, matrix)
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`2
    3 3 1
    1 2 3
    4 5 6
    7 8 9
    3 3 2
    1 2 3
    4 5 6
    7 8 9`);
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