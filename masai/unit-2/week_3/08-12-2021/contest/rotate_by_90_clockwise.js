function rotate(n, matrix) {
    for (let i = 0; i < n; i++) {
        var row = []
        for (let j = 0; j < n; j++) {
            row.push(matrix[n-1-j][i])
        }
        console.log(row.join(' '))
    }
}


function runProgram(input) {
    var input = input.trim().split("\n")
    for (let i = 1; i < input.length; i+=n+1) {
        var n = +input[i].trim()
        var matrix = []
        for (let j = i+1; j <= i+n; j++) {
            matrix.push(input[j].trim().split(" ").map(Number))
        }
        rotate(n, matrix)
    }
  
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`2
    4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8
    3
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
  