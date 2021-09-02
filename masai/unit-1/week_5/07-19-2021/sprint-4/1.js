function runProgram(input) {
    var array = input.split("")
    var x = 0
    var y = 0
    for (i=0; i<array.length; i++) {

        if(array[i]=="L") {
            x--
        }else if(array[i]=="R") {
            x++
        }else if(array[i]=="U") {
            y++
        }else if(array[i]=="D") {
            y--
        }
    }
    console.log(x + " " + y)
  
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`LLRDDR`);
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