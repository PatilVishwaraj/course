function runProgram(input) {
  var array = input.split("\n")
  var t = Number(array[0])
  for (i=1; i<t; i++) {
    var series = (array[i]).split(" ").map(Number)
    var a= series[0]
    var b= series[1]
  }
}

if (process.env.USERNAME === 'PC') {
  runProgram(`2\n5 10\n6 10`);
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