function runProgram(input) {
    var n = Number(input)
    var sq = n*n
    var str = ''
    for (let i = 1; i <= sq; i++) {
      str += i + ' '
      if(i%n==0) {
        str += '\n'
      }
    }
    console.log(str)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`4`);
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