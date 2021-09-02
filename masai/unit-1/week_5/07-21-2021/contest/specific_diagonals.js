function digonals(row, col, target, matrix) {
  var digonal1 = []
  var digonal2 = []
  var r1 = 0
  var c1 = 0
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < col; c++) {
      if (matrix[r][c]==target) {
        r1 = r
        c1 = c
      }
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if ((i-j)==(r1-c1)) {
        digonal1.push(matrix[i][j])
      }
      if ((i+j)==(r1+c1)) {
        digonal2.push(matrix[i][j])
      }
    }
  }
  console.log(digonal1.join(" "))
  console.log(digonal2.join(" "))

}

function runProgram(input) {
    var array = input.split("\n")
    var data = array[0].split(" ").map(Number)
    var row = data[0]
    var col = data[1]
    var target = Number(array[1+row])
    var matrix = []
    for (let m = 1; m <=row; m++) {
      matrix.push(array[m].split(" "))
    }
    digonals(row, col, target, matrix)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`4 5\n1 2 3 4 5\n6 7 8 9 10\n11 12 13 14 15\n16 17 18 19 20\n14`);
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