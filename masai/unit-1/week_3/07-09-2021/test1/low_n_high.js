function runProgram(input) {
    var arr = input.split("\n")
    var score = (arr[1]).split(" ")
    var low= score[0]
    var high= score[0]
    for(var i =0; i<score.length; i++) {
        if(Number(score[i]) < low){
        low = Number(score[i])
        }
        if(Number(score[i]) > high){
        high = Number(score[i])
        }
    }
    console.log(Number(low))
    console.log(Number(high))
} 

if (process.env.USERNAME === 'PC') {
  runProgram(`4\n-2 0 8 4`);
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