function santoshProfit(num) {
    if (num==0) {
        return 1
    }
    if (num<0) {
        return 0
    }
    return santoshProfit(num - 4) + santoshProfit(num - 8)
}


function runProgram(input) {
    input = input.trim().split('\n').map(Number)
    let test = input[0]
    for (let i = 1; i <= test; i++) {
        let num = input[i]
        console.log(santoshProfit(num)) 
    }
  }
  
  if (process.env.USERNAME === `PC`) {
    runProgram(`1
    12`);
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
  