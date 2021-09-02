function rotate90(d, matrix) {
    for (let c = d-1; c >= 0; c--) {
        var row = []
        for (let r = 0; r < d; r++) {
            row.push(matrix[r][c])
        }
        console.log(row.join(" "))
    }
}

function runProgram(input) {
    var array = input.split("\n")
    var d = Number(array[0])
    var matrix = []
    for (let i = 1; i <= d; i++) {
        matrix.push(array[i].split(" ").map(Number))
    }
    rotate90(d, matrix)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`4\n1 2 3 4\n5 6 7 8\n1 2 3 4\n5 6 7 8`);
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