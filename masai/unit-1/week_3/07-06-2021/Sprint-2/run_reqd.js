function runProgram(input) {
    var arr = input.split(" "),
        runs = arr[0]
    for (i=1; i<=6; i++){
        runs = runs - arr[i]
        
    }
    console.log(runs)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`40 6 6 6 6 6 6`);
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