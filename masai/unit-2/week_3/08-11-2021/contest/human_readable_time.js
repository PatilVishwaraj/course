function runProgram(input) {
    var hour = Math.floor(input/60)
    var min = input%60
    if (hour==1) {
        console.log(hour + 'hr ' + min + 'mins')
    } else {
        console.log(hour + 'hrs ' + min + 'mins')
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`135`);
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
  