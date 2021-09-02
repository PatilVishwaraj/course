function runProgram(input) {
    var n = Number(input)
    var x = Math.floor(32/n)

    if(n==0) {
        console.log(-1)
    } else if(x==0) {
        console.log("Too Low")
    } else {
        console.log(x)
    }
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