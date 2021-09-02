function runProgram(input) {
    var arr = input.split("\n")
    var series = (arr[1]).split(" ")
    var sum= 0
    for(var i =0; i<arr[0]; i++) {
        sum = sum + Number(series[i])
        }
        if (sum>100) {
            console.log("Greater")
        } else {
            console.log("Lesser")
        }
}
if (process.env.USERNAME === 'PC') {
  runProgram(`2\n50 50`);
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