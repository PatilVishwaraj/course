function wayToSum(N) {
    if (N==0) {
        return 1
    } else if (N<0) {
        return 0
    } else {
        return wayToSum(N-1)+wayToSum(N-2)+wayToSum(N-5)
    }
}



function runProgram(input) {
    input = input.trim().split('\n').map(Number)
    var test = +input[0]
    for (let i = 1; i <= test; i++) {
        var N = +input[i]
        console.log(wayToSum(N))
    }
  }
  
  if (process.env.USERNAME === `Admin`) {
    runProgram(`1
    5`);
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
  