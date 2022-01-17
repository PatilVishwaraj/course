function runProgram(input) {
    input = input.trim().split('\n')
    let N = +input[0]
    let str = input[1].trim()
    if (str[0]=="a" || str[0]=="e" || str[0]=="i" || str[0]=="o" || str[0]=="u") {
      str += "hulk" 
    } else {
      str += "thor"
    }
    console.log(str)
  }
  
  if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`5
    abced`);
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
  