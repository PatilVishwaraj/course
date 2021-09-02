function checkPalindrome (input) {
  var ans = ""
    for (var i=0; i<input.length; i++) {
      ans = input[i] + ans
    }
    if (ans==input) {
      console.log("Yes")
    } else {
      console.log("No")
    }
}

function runProgram(input) {
    checkPalindrome(input)
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`1221`);
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