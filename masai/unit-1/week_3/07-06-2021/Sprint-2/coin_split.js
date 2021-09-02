function runProgram(input) {
    var arr = input.split(" "),
        a = Number(arr[0]), b = Number(arr[1]), 
        k = Number(arr[2]), d = Number(b-a), x = 0
        if ((d>0)) {
            x = (k-(d))/2
        }
        else {
            x = (k+(d))/2
        }
        if (x==0){
            console.log("YES")
        }
        else {
            console.log("NO")
        }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`396 92 530`);
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