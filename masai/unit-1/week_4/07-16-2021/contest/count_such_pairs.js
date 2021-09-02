function runProgram(input) {
    var array = input.split("\n")
    var data = (array[0]).split(" ").map(Number)
    var n = data[0]
    var target = data[1]
    var series = (array[1]).split(" ").map(Number)
    var count = 0
    for (i=0; i<n-1; i++) {
        for (j=i+1; j<n; j++) {
            if ((series[i]+series[j])==target) {
                count++
            }
        }

    }
    console.log(count)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`5 9\n3 0 6 2 7`);
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