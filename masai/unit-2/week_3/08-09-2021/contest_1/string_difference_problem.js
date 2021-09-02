function strDiff(s1, s2) {
    for (let i = 0; i < s1.length; i++) {
        if (s1[i]!==s2[i]) {
            console.log(s1[i])
        }
    }
}

function runProgram(input) {
    var input = input.split("\n")
    var s1 = input[0].trim()
    var s2 = input[1].trim()
    strDiff(s1, s2)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`ABCX
    ABCD`);
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
  