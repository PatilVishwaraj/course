function runProgram(input) {
    var array = input.split("\n")
    var data = array[0].split(" ").map(Number)
    var n = data[0]
    var m = data[1]
    var sum = 0
    for (i=1; i<=n; i++) {
        var series = array[i].split(" ").map(Number)
        for (j=0; j<m; j++) {
            var x = series[j]%3
            if (x==0) {
                sum+=series[j]
            }
        }
    }
    console.log(sum)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`2 3\n3 1 8\n2 6 0`);
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