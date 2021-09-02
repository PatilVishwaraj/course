function runProgram(input) {
    var arr = input.split("\n")
    var series = (arr[1]).split(" ")
    var count = 0
    for (i=0; i<arr[0]; i++) {
        if(series[i]== 42) {
            count++
        }

    }
    if (count==0) {
        console.log("No")
    }
    else {
        console.log("Yes")
    }
}

if (process.env.USERNAME === 'PC') {
  runProgram(`5\n3 7 0 9 8`);
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