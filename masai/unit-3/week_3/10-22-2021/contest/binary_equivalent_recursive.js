function convertBinary(n, ans) {
  if (n==1) {
    ans = 1 + ans
    console.log(ans)
    return
  } else {
    ans = (n%2) + ans
    convertBinary(Math.floor(n/2), ans)
  }
}


function runProgram(input) {
    input = input.trim().split('\n').map(Number)
    for (let i = 1; i < input.length; i++) {
      var n = +input[i]
      convertBinary(n, "")
    }
    // convertBinary(2, "")
  }
  
  if (process.env.USERNAME === `Admin`) {
    runProgram(`3
    2
    15
    128`);
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
  