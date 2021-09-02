function runProgram(input){
    var a = Number(input);
    var r1 = a%35
    var r2 = a%7
    var r3 = a%5
    if (r1 == 0) {
        console.log("Masai School")
    }
    else if (r2 == 0) {
        console.log("Masai")
    }
    else if (r3 == 0) {
        console.log("School")
    }
    else {
        console.log("Hurray!")
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