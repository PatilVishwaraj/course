function alphaValue (string) {
    var alpha = " abcdefghijklmnopqrstuvwxyz"
    var value = 0
    for (i= 0; i<string.length; i++) {
        for (j= 1; j<=26; j++) {
            if (string[i]==alpha[j]) {
                value += j
            }
        }
    }
    return value
}

function runProgram(input) {
    console.log(alphaValue(input))
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`aba`);
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