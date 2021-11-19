function answer(queue, n, arr) {
  for (let i = 0; i < n; i++) {
    
    
  }
}

function runProgram(input) {
    input = input.trim().split('\n')
    var test = +input[0]
    for (let i = 1; i < test*2; i+=2) {
      var queue = []
      var n = +input[i]
      var arr = input[i-1].trim().split(' ').map(Number)
    }
  }
  
  if (process.env.USERNAME === `PC`) {
    runProgram(`1
    5
    5 4 1 3 2`);
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
  