function runProgram(input) {
    var arr = input.split(" ")
    var marks_lost = 0
    for (i=0; i<arr.length; i++) {
        marks_lost += (150-Number(arr[i]))
    }
    console.log(marks_lost)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`120 120 120`);
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