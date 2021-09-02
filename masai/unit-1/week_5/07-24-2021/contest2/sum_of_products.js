function runProgram(input) {
    var array = input.split(" ")
    var product = 0
    var k = array[0]
    for (let i = 1; i < array.length; i++) {
      product+= k*array[i]
    }
    console.log(product)
  }

  
  if (process.env.USERNAME === 'PC') {
    runProgram(`4 1 2 3`);
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