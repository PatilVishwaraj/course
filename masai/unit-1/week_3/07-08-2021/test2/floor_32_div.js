function runProgram(input){
    var n = Number(input);
    var x = 32/n
    if (Math.floor(x) ==0) {
        console.log("Too Low")
    }
    else if (n!==0 ) {
        console.log(Math.floor(x))
    }
    else {
        console.log("-1")
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