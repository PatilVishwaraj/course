function printTable (arr) {
    var n = arr[0]
    for (i=1; i<=n; i++) {
        var x = arr[i]
        for (j=2; j<=10; j++) {
            x = x + " " + ((arr[i])*j)
        }
        console.log(x)
    }
}

function runProgram(input) {
    var arr = input.split("\n")
    printTable(arr)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`5\n2\n1\n4\n7\n6`);
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