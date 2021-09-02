function checkTriangle (a, b, c) {
    if (a<(b+c) && b<(a+c) && c<(a+b)) {
        return true
    }
    return false
}

function runProgram(input){
    var arr = input.split("\n");
    var cases = Number(arr[0]);
    for(var i=1; i<=cases; i++){
        var sides = arr[i].split(" ").map(Number)
        var valid = checkTriangle(sides[0], sides[1],sides[2])
        if (valid) {
            console.log("Yes")
        }else{
            console.log("No")
        }
        
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
