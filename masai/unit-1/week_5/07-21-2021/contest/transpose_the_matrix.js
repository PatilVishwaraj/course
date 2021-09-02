function transpose(R, C, matrix) {
    for(i = 0; i < C; i++){
        var row = []
        for(j = 0; j < R; j++){
            row.push((matrix[j][i]))
        }
        console.log(row.join(" "))
    }
}

function runProgram(input) {
    var array = input.split("\n")
    var data = array[0].split(" ").map(Number)
    var R = data[0]
    var C = data[1]
    var matrix = []
    for (let m = 1; m <=R; m++) {
        var row = array[m].split(" ").map(Number)
        matrix.push(row)
    }
    transpose(R, C, matrix)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`5 4\n0 0 0 0\n1 1 1 1\n2 2 2 2\n3 3 3 3\n4 4 4 4`);
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