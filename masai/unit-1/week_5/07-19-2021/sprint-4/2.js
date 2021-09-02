function runProgram(input) {
    var array = input.split("")
    var n = array.length
    var count = 0
    for (i=0; i<n; i++) {

    }
    console.log(count)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`ATTCGGGA`);
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