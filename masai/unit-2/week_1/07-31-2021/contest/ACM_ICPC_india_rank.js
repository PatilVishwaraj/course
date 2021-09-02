function runProgram(input) {
    var array = input.split("\n")
    for (let i = 1; i <= Number(array[0]); i++) {
        if (array[i].trim()==='India') {
            console.log(i)
        }
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`5
    Russia
    USA
    Japan
    China
    India`);
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