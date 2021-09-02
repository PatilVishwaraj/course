function rotateArray(n, k, series) {
    var ans = []
    for (let i = 0; i < n; i++) {
        ans[i+k%n] = series[i]
    }
    console.log(ans)
}

function runProgram(input) {
    var array = input.trim().split("\n")
    var test = Number(input[0])
    for (let i = 1; i < array.length; i+=2) {
        var data = array[i].trim().split(" ").map(Number)
        var n = data[0]
        var k = data[1]
        var series = array[i+1].trim().split(" ").map(Number)
        rotateArray(n, k, series)
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`3
    6 3
    1 2 3 4 5 6
    2 2
    1 2
    2 3
    1 2`);
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