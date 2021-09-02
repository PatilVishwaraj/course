function runProgram(input) {
    var start = ""
    for (i=1; i<=input; i++) {
      for (j=1; j<=input; j++) {
        start = start + " " + (i*j)
      }
      var x = start.trim()
      console.log(x)
      start = ""
    }
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