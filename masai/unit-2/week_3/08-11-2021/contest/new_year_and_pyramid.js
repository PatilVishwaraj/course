function runProgram(input) {
    var sum = 0
    var width = 0
    var count = 0
    for (let i = 1; sum <= +input; i++) {
        width += i
        sum += width
        count++
    }
    console.log(count-1)
  
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`25`);
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
  