
function spiralTraverse(n, m, matrix) {
    var top = 0
    var bottom = n-1
    var left =  0
    var right = m-1
    var count = 0
    var size = n*m
    var ans = []
    while (count<size) {
        for (let i = bottom; i >= top && count<size; i--) {
          ans.push(matrix[i][left])
          count++
        }
        left++
        for (let i = left; i <= right && count<size; i++) {
          ans.push(matrix[top][i])
          count++
        }
        top++
        for (let i = top; i <= bottom && count<size; i++) {
            ans.push(matrix[i][right])
            count++
          }
        right--
        for (let i = right; i >= left && count<size; i--) {
            ans.push(matrix[bottom][i])
            count++
          }
        bottom--
    }
    console.log(ans.join(' '))
  }
  
  function runProgram(input) {
      var input = input.trim().split("\n")
      for (let i = 1; i < input.length; i+=n+1) {
        var [n, m] = input[i].trim().split(" ").map(Number)
        var matrix = []
          for (let j = i+1; j <= i+n; j++) {
            matrix.push(input[j].trim().split(" ").map(Number))
          }
          spiralTraverse(n, m, matrix)
      }
    }
    
    if (process.env.USERNAME === 'PC') {
      runProgram(`2
      3 4
      1 2 3 4
      5 6 7 8
      9 10 11 12
      4 3
      1 2 3
      4 5 6
      7 8 9
      10 11 12`);
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
    