function recursivePowerFunc(A, B) {
    if (B===0) {
      return 1
    }
    if (B===1) {
      return A
    }
    return A * recursivePowerFunc(A, B-1)
}

function runProgram(input) {
    let [A, B] = input.trim().split(' ').map(Number)
    console.log(recursivePowerFunc(A, B))
  }
  
  if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`2 4`);
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
  