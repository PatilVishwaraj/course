function runProgram(input){
   
    var a = Number(input);
    var b = a % 2
    if (b == 0) {
        console.log("Even")
    }
    else {
        console.log("Odd")
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