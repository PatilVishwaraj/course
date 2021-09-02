function runProgram(input) {
    var array = input.split("")
    var n = array.length
    var str = ""
    for (i=1; i<n; i+=2) {
        for (j=1; j<=Number(array[i]); j++) {
            str +=array[i-1]
        }
    }
    console.log(str)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`a3b2`);
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