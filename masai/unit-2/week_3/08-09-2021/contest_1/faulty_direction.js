function findFault(n, str) {
    var x = 0
    var y = 0
    for (let i = 0; i < n; i++) {
        if (str[i]=='L') {
            x--
        }
        else if (str[i]=='R') {
            x++
        }
        else if (str[i]=='U') {
            y++
        }
        else if (str[i]=='D') {
            y--
        }
    }
    if (x==0 && y==0) {
        console.log('Yes')
    }
    else {
        console.log('No')
    }
}

function runProgram(input) {
    var input = input.trim().split("\n")
    for (let i = 1; i < input.length; i+=2) {
        var n = Number(input[i])
        var str = input[i+1].trim()
        findFault(n, str)
    }
  
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`2
    5
    RLRUD
    4
    LRUD`);
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
  