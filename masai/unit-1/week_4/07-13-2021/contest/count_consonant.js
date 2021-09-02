function runProgram(input) {
    var n = input.length
    var consonants ="bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ"
    var m = consonants.length
    var count =0
    for (i=0; i<n; i++) {
        for (j=0; j<m; j++) {
            if (input[i]==consonants[j]) {
                count++
            }
        }
    }
    console.log(count)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`aeviou`);
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