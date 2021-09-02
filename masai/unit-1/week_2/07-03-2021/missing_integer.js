function runProgram(input) {
  var arr = input.split(" ")
  count = 0
  for(var i =1; i<=arr.length+1; i++) {
    for(var j =0; j<arr.length; j++) {
      if(i==arr[j]) {
        count++
        if(i!==count) {
          console.log(count)
          count++
        }
      }
    }
  }
}

if (process.env.USERNAME === 'PC') {
  runProgram(`4 5 1 3`);
} else {
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