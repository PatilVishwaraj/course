function sumMatrix(row, col, matrix) {
    var sum = 0
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            sum += matrix[i][j]
        }
    }
    return sum
}

function runProgram(input) {
    var input = input.trim().split("\n")
    var [n, m] = input[0].trim().split(" ").map(Number)
    var matrix1 = []
    for (let i = 1; i <= n; i++) {
        matrix1.push(input[i].trim().split(" ").map(Number))
    }
    var [i, j] = input[n+1].trim().split(" ").map(Number)
    var matrix2 = []
    for (let j = n+1; j < n+2+i; j++) {
        matrix2.push(input[j].trim().split(" ").map(Number))
    }
    var sum1 = sumMatrix(n, m, matrix1)
    var sum2 = sumMatrix(i, j, matrix2)
    if (sum1>sum2) {
        console.log(sum1)
    }
    else {
        console.log(sum2)
    }
    console.log(n)
    console.log(m)
    console.log(matrix1)
    console.log(i)
    console.log(j)
    console.log(matrix2)
    console.log()
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`4 1
    4
    -4
    0
    2
    1 4
    2 4 -7 4`);
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
  