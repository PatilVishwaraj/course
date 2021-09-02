function runProgram(input) {
    var data = input.split("\n")
    var n = Number(data[0])
    var array1 = (data[1]).split(" ").map(Number)
    var array2 = (data[2]).split(" ").map(Number)
    for (i=0; i<n; i++) {
        for (j=0; j<n; j++) {
            if (array1[i]==array2[j]) {
                console.log(array1[i])
            }
        }
    }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`3\n5 9 7\n9 2 5`);
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