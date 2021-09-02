function runProgram(input) {
    var n = input.length
    var value = false
    for (i=0;i <n; i++) {
        if (input[i]==4){
            if (input[i+1]==2){
                if (input[i+2]==0){
                    value = true
                }
            }
        }
    }
    if (value){
        console.log("Caught")
    }
    else{
        console.log("Escaped")
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`97420`);
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