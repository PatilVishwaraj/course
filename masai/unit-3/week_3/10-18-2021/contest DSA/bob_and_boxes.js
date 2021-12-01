var count = 0

function helpWendy(n) {
  if (n<0) {
    return 0
  } else if (n==0) {
    return 1
  } else {
    return helpWendy(n-1) + helpWendy(n-3) + helpWendy(n-5)
  }
}

function runProgram(input) {
    input = +input
    var ans = helpWendy(input)
    console.log(ans)
  }
  
 if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`7`);
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
  