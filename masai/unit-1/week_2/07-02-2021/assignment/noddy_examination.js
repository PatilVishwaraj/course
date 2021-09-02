function marks(n, x, series) {
    var marks = 0
    var skip = 0
    for (let i = 0; i < n; i++) {
        if (series[i]<=x && skip<=1) {
            marks++
        }
        else{
            skip++
        }
    }
    console.log(marks)
}

function runProgram(input) {
    var array = input.split("\n")
    var data = array[0].split(" ").map(Number)
    var n = data[0]
    var x = data[1]
    var series = (array[1]).split(" ").map(Number)
        marks(n, x, series)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`7 6\n4 3 7 6 7 2 2`);
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