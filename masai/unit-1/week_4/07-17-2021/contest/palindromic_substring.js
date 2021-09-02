function runProgram(input) {
  var count = 0
    for (let start = 0; start < input.length; start++) {
      for (let end = start+1; end <= input.length; end++) {
        var sub1 = ""
        var sub2 = ""
        for (let k = start; k < end; k++) {
          sub1 += input[k]
          sub2 = input[k] + sub2
        }
        if (sub1==sub2) {
          if (count<sub1.length) {
            count=sub1.length
          }
        }
      }
    }
    console.log(count)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`thisracecarisgood`);
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