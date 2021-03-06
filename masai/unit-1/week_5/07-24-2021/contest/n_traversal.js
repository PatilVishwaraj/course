function traverseN(n, matrix) {
    var line1 = []
    var line2 = []
    var line3 = []
    for (let i = n-1; i >= 0; i--) {
      if (i!==0 && i!==n-1) {
        line2.unshift(matrix[i][i])
      }
        line1.push(matrix[i][0])
        line3.push(matrix[i][n-1])
    }
    console.log(line1.join(' '),line2.join(' '),line3.join(' '))
}

function runProgram(input) {
    var array = input.split("\n")
    for (let i = 1; i < array.length; i+=n+1) {
        var n =  Number(array[i])
        var matrix = []
        for (let j = i+1; j <= i+n; j++) {
            var row = array[j].split(" ").map(Number)
            matrix.push(row)
        }
        traverseN(n, matrix)
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`1\n3\n1 2 3\n4 5 6\n7 8 9`);
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