function runProgram(input) {
  var arr = input.split("\n")
  var score = (arr[1]).split(" ")
  
  for (i=0; i<score.length; i++) {
    var x = Number(score[(i+1)])
    if ((i+1)==score.length) { x= -1}
    if(score[i]==2) {
      console.log(x)
    }
  }
}
if (process.env.USERNAME === "PC") {
  runProgram(`5\n5 6 1 4 2`);
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