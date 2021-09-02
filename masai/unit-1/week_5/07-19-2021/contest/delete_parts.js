function runProgram(input) {
    var array = input.split("\n")
    var n = Number(array[0])
    var string = array[1]
    var data = (array[2]).split(" ").map(Number)
    var l = data[0]
    var r = data[1]
    var ans = ""
    for (i=0; i<l; i++) {
        ans+=string[i]
    }
    
    for (j=r+1; j<=n; j++) {
        ans+=string[j]
    }
    console.log(ans)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`5\nabcdef\n1 3`);
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