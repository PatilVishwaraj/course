function runProgram(input) {
  var n = input
  for (let i = 0; i < n; i++) {
    var row = []
    for (let j = 0; j < n; j++) {
      if (i+j<n) {
        row.push('*')
      }
      else {
        row.push(' ')
      }
    }
    console.log(row.join(' '))
  }
  }
  
  if (process.env.USERNAME === 'PC') {
    runProgram(`5`);
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