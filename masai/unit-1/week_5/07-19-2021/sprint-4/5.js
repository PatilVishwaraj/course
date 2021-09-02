function runProgram(input) {
    var array = input.split("\n")
    for (i=1; i<array.length; i+=2) {
        console.log(array[i])
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`3 3\n1 2 3\n4 5 6\n7 8 9`);
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