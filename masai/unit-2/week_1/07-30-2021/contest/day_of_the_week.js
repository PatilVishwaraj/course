function runProgram(input) {
    var array = input.split("\n")
    var week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    for (let i = 0; i < 7; i++) {
        if (array[0] == week[i]) {
            console.log(week[(i+Number(array[1]))%7])
        }
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`Sunday
    5`);
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