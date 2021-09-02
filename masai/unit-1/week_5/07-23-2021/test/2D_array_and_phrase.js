function checkProduct(row, col, target, matrix) {
  var count = 0
  for (let r1 = 0; r1 < row; r1++) {
      for (let c1 = 0; c1 < col-3; c1++) {
          if (matrix[r1][c1]+matrix[r1][c1+1]+matrix[r1][c1+2]+matrix[r1][c1+3]==target) {
              count++
          }
      }
  }
  for (let c2 = 0; c2 < col; c2++) {
      for (let r2 = 0; r2 < row-3; r2++) {
          if (matrix[r2][c2]+matrix[r2+1][c2]+matrix[r2+2][c2]+matrix[r2+3][c2]==target) {
              count++
          }
      }
  }
  for (let r3 = 0; r3 < row-3; r3++) {
    for (let c3 = 0; c3 < col-3; c3++) {
            if (matrix[r3][c3]+matrix[r3+1][c3+1]+matrix[r3+2][c3+2]+matrix[r3+3][c3+3]==target) {
              count++
          }
      }
  }
  for (let r3 = row-1; r3 > 2 ; r3--) {
    for (let c3 = 0; c3 < col-3; c3++) {
        if (matrix[r3][c3]+matrix[r3-1][c3+1]+matrix[r3-2][c3+2]+matrix[r3-3][c3+3]==target) {
            count++
        }
      }
  }
  console.log(count)
}

function runProgram(input) {
    var array = input.split("\n")
    var info = array[0].split(" ").map(Number)
    var row = info[0]
    var col = info[1]
    var target = "saba"
    var matrix = []
    for (let i = 1; i <=row; i++) {
        matrix.push(array[i].split(""))
    }
    checkProduct(row, col, target, matrix)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`5 5\nsafer\namjad\nbabol\naaron\nsongs`);
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