function reverseN(n, matrix) {
    var line1 = []
    var line2 = []
    var line3 = []
    for (let i = 0; i < n; i++) {
        if (i!==0 && i!==n-1) {
            line2.push(matrix[n-1-i][i])
        }
        line1.push(matrix[i][0])
        line3.push(matrix[i][n-1])
    }
    console.log(line1.join(' '),line2.join(' '),line3.join(' '))
}

function runProgram(input) {
    var array = input.split("\n")
    for (let i = 1; i < array.length; i+=n+1) {
        var matrix = []
        var n = Number(array[i])
        for (let j = i+1; j <= i+n; j++) {
          matrix.push(array[j].split(' ').map(Number))
        }
       reverseN(n, matrix)
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`1\n5\n1 2 3 4 5\n6 7 8 9 10\n11 12 13 14 15\n16 17 18 19 20\n21 22 23 24 25`);
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