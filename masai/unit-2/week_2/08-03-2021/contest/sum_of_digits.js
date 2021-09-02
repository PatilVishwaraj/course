function sum(n, series) {
    var sum = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < series[i].length; j++) {
            sum += Number(series[i][j])
        }
    }
    console.log(sum)
}

function runProgram(input) {
    var array = input.trim().split("\n")
    var test = Number(array[0])
    var line = 1
    for (let i = 0; i < test; i++) {
        var n = Number(array[line++])
        var series = array[line++].trim().split(" ")
        sum(n, series)
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`2
    5
    12 14 16 17 29
    6
    1 2 3 4 5 51`);
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