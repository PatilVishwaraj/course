factorial = (n) => {
if (n<=1) {
  return 1
} else {
  return factorial(n-1)*n
}
}

sumEPowerToX = (x, n) => {
  if (n==0) {
    return 1
  } else {
    return sumEPowerToX(x, n-1)+((x**n)/factorial(n))
  }
}

function runProgram(input) {
    var [x, n] = input.trim().split(' ').map(Number)
    console.log(sumEPowerToX(x, n).toFixed(4))
  }
  
 if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`4 2`);
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
  