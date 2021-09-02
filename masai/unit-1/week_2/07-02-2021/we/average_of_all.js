function runProgram(input) {
    var arr = input.split("\n")
    var total = 0
    var cases = Number(arr[0])
    var num_arr = (arr[1]).split(" ")
    for(var i=0; i<num_arr.length; i++) {
        total+= Number(num_arr[i])
    }
    var avrg = total/cases
    console.log(Math.ceil(avrg))
}
if (process.env.USERNAME === 'PC') {
  runProgram(`4\n2 5 0 9`);
} 
else {
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