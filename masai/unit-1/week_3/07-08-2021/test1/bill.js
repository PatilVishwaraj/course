function runProgram(input) {
    var bill = input
    var unit = 0
    bill-=80
    if(bill>150) {
        bill-= 150
        unit+= 50
        if(bill>500) {
            bill-= 500
            unit+= 100
            unit+= bill/10
        }
        else{
            unit+= bill/5
        }
    }
    else{
        unit+= bill/3
    }
    console.log(unit)
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