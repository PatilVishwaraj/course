function runProgram(input) {
    var input = input.trim().split("")
    var obj = {}
    var ans = 'Unique'
    for (let i = 0; i < input.length; i++) {
        if (obj[input[i]]) {
            ans = 'No'
            break
        }
        else {
            obj[input[i]] = 1
        }
    }
    console.log(ans)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`masai`);
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