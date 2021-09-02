function runProgram(input) {
    var arr = input.split("\n")
    var n = Number(arr[0])
    var series = (arr[1]).split(" ").map(Number)
    var count = 0
    for (var i=0; i<n; i++) {
        if (series[i]==42){
            count++
        }
    }
    if (count==0){
      console.log("No")
    } else{
      console.log("Yes")
    }
  }
  if (process.env.USERNAME === 'PC') {
    runProgram(`6\n42 12 43 9 4 5`);
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