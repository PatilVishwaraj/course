function subString(str) {
    var n = str.length
    var array = []
    for (start=0; start<n; start++) {
        for (end=start+1; end<=n; end++) {
            var sub_str = ''
            for (k=start; k<end; k++) {
                sub_str += str[k]
            }
            if (sub_str[0]==sub_str[sub_str.length-1]) {
            array.push(sub_str)
            }
        }
    }
    return array.length
}

function runProgram(input) {
  console.log(subString(input))
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`abcab`);
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