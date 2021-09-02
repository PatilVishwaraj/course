function runProgram(input){
    var newInput = input.split(" ");
    var d = Number(newInput[0]);
    var t = Number(newInput[1]);
    var s = d/t
    if (s > 40) {
        console.log("Apply Brake")
    }
    else {
        console.log("Keep Going")
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
   read += input;
});
process.stdin.on("end", function () {
   read = read.replace(/\n$/,"")
  runProgram(read);
});

process.on("SIGINT", function () {
   read = read.replace(/\n$/,"")
   runProgram(read);
   process.exit(0);
});