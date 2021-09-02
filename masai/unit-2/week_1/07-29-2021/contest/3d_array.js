function runProgram(input) {
    var array = input.split("\n")
    var data = array[0].split(" ").map(Number)
    var layer  = data[0]
    var row =  data[1]
    var col =  data[2]
    var series = (array[1]).split(" ").map(Number)
    // series.unshift('')
    var ans = []
    for (let l = 0; l < layer; l++) {
      var matrix = []
      for (let r = 0; r < row; r++) {
        var rows = []
        for (let c = 0; c < col; c++) {
          rows.push(series[l+r+c])
        }
        matrix.push(rows)
      }
      ans.push(matrix)
    }
    console.log(ans)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`4 5 2\n6 3 4 3 6 5 5 2 2 9 3 2 6 3 1 4 4 1 8 8 5 4 3 1 3 2 7 6 6 6 1 4 2 5 3 6 6 9 5 5`);
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