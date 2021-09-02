function digonalDiff(matrix) {
  var digonal1 = 0
  var digonal2 = 0
  var N = matrix.length
  for(r=0; r<N; r++) {
    for(c=0; c<N; c++) {
      if (r==c) {
        digonal1 += matrix[r][c]
      }
      else if ((r+c)==(N-1)) {
        digonal2 += matrix[r][c]
      }
    }
  }
  var diff= 0
  if (digonal2>digonal1) {
    diff = digonal2-digonal1
  } else {
    diff = digonal1-digonal2
  }
  return diff
}

function runProgram(input) {
    var array = input.split("\n")
    var matrix1 = []
    for(r=0; r<array.length; r++) {
        matrix1.push(array[r].split(" ").map(Number))
    }
    console.log(digonalDiff(matrix1))
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`1 2 3 4\n5 6 7 6\n7 8 9 9\n2 4 1 3`);
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