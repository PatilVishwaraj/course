function checkTriangle (a, b, c) {
    if (a<(b+c) && b<(a+c) && c<(a+b)) {
        return true
    }
    return false
}
function rightAngle (a, b, c) {
    if ((a**2)==((b**2)+(c**2)) || (b**2)==((a**2)+(c**2)) || (c**2)==((b**2)+(a**2))) {
        return true
    }
    return false
    }


function runProgram(input){
    var sides = input.split(" ").map(Number)
        var valid = checkTriangle(sides[0], sides[1],sides[2])
        var valid2 = rightAngle(sides[0], sides[1],sides[2])
        if (valid && valid2) {
            console.log("Yes")
        }else{
            console.log("No")
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
