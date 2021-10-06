function runProgram(input) {
    input = input.trim().split('\n').map(Number)
    var n = +input[0]
    for (let i = 1; i <= n; i++) {
        var command = input[i][0]
        
    }
  
  }
  
  if (process.env.USERNAME === `PC`) {
    runProgram(`8
    push 5
    push 3
    push 1
    getMin
    pop
    getMin
    pop
    getMin`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding(`ascii`);
    let read = ``;
    process.stdin.on(`data`, function (input) {
      read += input;
    });
    process.stdin.on(`end`, function () {
      read = read.replace(/\n$/, ``);
      read = read.replace(/\n$/, ``);
      runProgram(read);
    });
    process.on(`SIGINT`, function () {
      read = read.replace(/\n$/, ``);
      runProgram(read);
      process.exit(0);
    });
  }
  