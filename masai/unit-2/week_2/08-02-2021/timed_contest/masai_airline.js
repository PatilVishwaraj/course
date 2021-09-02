function runProgram(input) {
    var array = input.trim().split("\n")
    var test = Number(array[0])
    var checkin = (array[1]).trim().split(" ").map(Number)
    var hand = (array[2]).trim().split(" ").map(Number)
    for (let i = 0; i < test; i++) {
        if (checkin[i]<= 15 && hand[i]<= 7) {
            console.log('Boarding')
        }
        else {
            console.log('Stop')
        }
    }
  
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`4
    12 14 15 6
    8 5 7 4`);
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