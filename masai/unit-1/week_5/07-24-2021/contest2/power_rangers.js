function runProgram(input) {
    var array = input.split(" ").map(Number)
    var power = 0
  for (let i = 0; i < array.length; i++) {
    power += array[i]*(5-i)
  }

  console.log(power)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`3 2 1 4 5`);
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