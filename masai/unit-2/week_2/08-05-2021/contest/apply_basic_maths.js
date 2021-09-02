function runProgram(input) {
    var input = input.trim().split("\n")
    var n = Number(input[0])
    var array = input[1].trim().split(" ").map(Number)
    var sum = array.reduce(function (ac, el) {
      return ac + el
    },0)
    var ans = -1
    var value = 'x'
    for (let i = 0; i < n; i++) {
      if ((sum-array[i])%7==0) {
        if (value > array[i] || value== 'x') {
          ans = i
          value = array[i]
        }
      }
    }
    console.log(ans)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`5
    14 7 8 2 4`);
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