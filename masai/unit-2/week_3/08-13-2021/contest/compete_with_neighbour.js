function runProgram(input) {
    var input = input.trim().split("\n")
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    var count = 0
    for (let i = 0; i < n; i++) {
        if (i==0 && arr[i]>arr[i+1]) {
            count++
        }
        else if (i==n-1 && arr[i]>arr[i-1]) {
            count++
        }
        else if (arr[i]>arr[i+1] && arr[i]>arr[i-1]) {
            count++
        }
    }
    console.log(count)
  
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`8
    1 2 3 4 2 1 6 5`);
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
  