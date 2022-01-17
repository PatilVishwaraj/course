function sumOfGP(n, r) {
  if (n<1) {
    return 1
  } else {
    return sumOfGP(n-1, r)+(1/(r**n))
  }
}


function runProgram(input) {
    var [n, r] = input.trim().split(' ').map(Number)
    var ans = (sumOfGP(n, r)).toFixed(4)
    console.log(ans)
  }
  
  if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`1 1`);
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
  