function runProgram(input) {
    var arr = input.split("\n")
    var n = Number(arr[0])
    var array = (arr[1]).split(" ").map(Number)
    var count = 0
    if (array[0]>array[1]) {
        count++
    }
    if (array[n-1]>array[n-2]) {
        count++
    }
    for (i=1; i<n-1; i++) {
        if (array[i]>array[i-1] && array[i]>array[i+1]) {
            count++
        }
    }
    console.log(count)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`8\n-3 -2 -4 -2 -5 -1 -18 0`);
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