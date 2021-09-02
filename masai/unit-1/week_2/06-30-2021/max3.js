function runProgram(input){
    var newInput = input.split(" ");
    var a = Number(newInput[0]);
    var b = Number(newInput[1]);
    var c = Number(newInput[2]);
    if ( a>b && b>c ) {
        console.log(a)
    }
    else if ( a>c && c>b ) {
        console.log(a)
    }
    else if ( b>a && a>c ) {
        console.log(b)
    }
    else if ( b>c && c>a ) {
        console.log(b)
    }
    else if ( c>a && a>b ) {
        console.log(c)
    }
    else if ( c>b && b>a ) {
        console.log(c)
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