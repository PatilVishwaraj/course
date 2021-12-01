function GCD() {
    
}

function prod() {
    
}


function runProgram(input) {
    input = input.trim().split('\n')
    var mod = 1000000000+7
    for (let i = 1; i < input.length; i+=2) {
        var n = +input[i]
        var arr = input[i+1].trim().split(' ').map(Number)
        console.log(n, arr)
    }

  }
  
  if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`1
    2
    2 6`);
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
  