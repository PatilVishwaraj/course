function runProgram(input) {
    var n = input
    var sum = 0
    for (i=2;i<=n;i+=2){
        sum += i
    }
    console.log(sum)

  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(``);
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