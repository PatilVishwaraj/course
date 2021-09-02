function runProgram(input) {
    var array = input.split(" ")
    var ans = array[0]
    for (i=1; i<array.length; i++) {
        ans =array[i] + " " + ans
    }
  console.log(ans)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`A Transformation in education`);
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