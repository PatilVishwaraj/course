function cipher(n, str) {
  var count = 1
  var ans_str = ""
  for (let j = 0; j < n; j++) {
      if (string[j]==string[j+1]) {
          count++
      }
      else {
          ans_str += string[j] + count
          count = 1
      }
  }
  console.log(ans_str)
}

function runProgram(input) {
    var input = input.trim().split("\n")
    for (let i = 1; i < input.length; i+=2) {
        var n = Number(input[i])
        var str = input[i+1].trim()
        cipher(n, str)
    }
  
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`2
    5
    aabcc
    5
    aazaa`);
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