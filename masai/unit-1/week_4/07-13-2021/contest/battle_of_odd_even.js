function runProgram(input) {
    var array = input.split("\n")
    var n = array[0]
    var series = array[1].split(" ").map(Number)
    var sum_even = 0
    var sum_odd = 0
    for (i=0; i<n; i++) {
        var b = series[i] % 2
        if (b == 0) {
            sum_even += series[i]
        }
        else {
            sum_odd += series[i]
        }
    }
    if (sum_even<sum_odd) {
        console.log("Odd")
    }
    else {
        console.log("Even")
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`5\n2 2 2 3 3`);
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