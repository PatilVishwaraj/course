function runProgram(input){
    var newInput = input.split(" ");
    var avg = Number(newInput[0]);
    var dist = Number(newInput[1]);
    var fuel = avg*dist
    fuel > 50 ? console.log("Enough") : console.log("Go On")
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