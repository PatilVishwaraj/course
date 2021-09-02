function runningSum(n, array) {
    var ans = []
    var sum = 0
    for (let i = 0; i < n; i++) {
        sum += array[i]
        ans.push(sum)
    }
    console.log(ans.join(' '))
}

function runProgram(input) {
    var input = input.trim().split("\n")
    for (let i = 1; i < input.length; i+=2) {
        var n = +input[i].trim()
        var array = input[i+1].trim().split(" ").map(Number)
        runningSum(n, array)
    }
  
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`1
    5
    1 2 3 4 5`);
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
  