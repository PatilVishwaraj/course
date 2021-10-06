function factorial(n) {
    var ans = 1
    for (let j = 1; j < n; j++) {
        ans *= j
        console.log(ans)
    }
}

function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 1; i < input.length; i++) {
        var [a, b] = input[i].trim().split(' ').map(Number)
        factorial(a)
    }
  
  }
  
  if (process.env.USERNAME === `PC`) {
    runProgram(`1
    25 29`);
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
  