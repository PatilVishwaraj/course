function runProgram(input){
    var newInput = input.split(" ");
    var start = Number(newInput[0]);
    var end = Number(newInput[1]);
    for (i=start; i<=end; i=(i*2)) {
      console.log(i)
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