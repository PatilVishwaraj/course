function runProgram(input) {
    var array = input.split("\n")
    var n = Number(array[0])
    var string = array[1]
    var ans = []
    for (let i = 0; i < n; i++) {
        if (string[i]==0) {
            ans.push(i)
        } 
    }
    var count = ans[1] - ans[0] + 1
    console.log(count || 0)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`5\n11011`);
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