function spiralTraverse(n, matrix) {
  var top = 0
  var bottom = n-1
  var left =  0
  var right = n-1
  var count = 0
  var size = n*n
  var ans = []
  while (count<size) {
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i])
      count++
    }
    top++
    for (let i = top; i <= bottom; i++) {
      ans.push(matrix[i][right])
      count++
    }
    right--
    for (let i = right; i >= left; i--) {
      ans.push(matrix[bottom][i])
      count++
    }
    bottom--
    for (let i = bottom; i >= top; i--) {
      ans.push(matrix[i][left])
      count++
    }
    left++
  }
  console.log(ans.join(' '))
}

function runProgram(input) {
    var input = input.trim().split("\n")
    var n = Number(input[0].trim())
    var matrix = []
      for (let i = 1; i <= n; i++) {
        matrix.push(input[i].trim().split(" ").map(Number))
      }
    spiralTraverse(n, matrix)
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
  