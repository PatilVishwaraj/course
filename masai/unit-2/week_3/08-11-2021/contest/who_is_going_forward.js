function runProgram(input) {
    var input = input.trim().split("\n")
    var [n, k] = input[0].trim().split(" ").map(Number)
    var array = input[1].trim().split(" ").map(Number)
    var ranks = []
    for (let i = 0; i < n; i++) {
        array[i]
    }
    console.log(k)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`8 5
    10 9 8 7 7 7 5 5`);
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
  