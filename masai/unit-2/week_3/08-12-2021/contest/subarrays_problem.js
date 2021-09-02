function runProgram(input) {
    var input = input.trim().split("\n")
    var n  = +input[0]
    var array = input[1].trim().split(" ").map(Number)
    var count = 0
    for (let start = 0; start < n; start++) {
        for (let end = start; end < n; end++) {
            var sum = 0
            for (let k = start; k <= end; k++) {
                sum += array[k]
            }
            if (sum%2==0) {
                count++
            }
        }
    }
    console.log(count)
  }
    {
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
  