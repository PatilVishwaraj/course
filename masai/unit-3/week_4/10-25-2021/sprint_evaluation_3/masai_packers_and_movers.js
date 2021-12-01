function transport(k, n, arr) {
  if (condition) {
    return 1 
  } else {
    return transport() 
  }
}

function runProgram(input) {
    input = input.trim().split('\n')
    var [k, n] = input[0].trim().split(' ').map(Number)
    var arr = input[1].trim().split(' ').map(Number)
    transport(k, n, arr)
  }
  
 if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`3 3
    1 2 3`);
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
  