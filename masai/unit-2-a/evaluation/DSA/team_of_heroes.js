function willWin(n, k, arr) {
    var result = "No"
    for (let i = 0; i < n+1; i++) {
        for (let j = i+1; j < n; j++) {
            if (arr[i]+arr[j]==k) {
                result = "Yes"
            }
        }
    }
    console.log(result)
}

function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 1; i < input.length; i+=2) {
        var [n, k] = input[i].trim().split(' ').map(Number)
        var arr = input[i+1].trim().split(' ').map(Number)
        willWin(n, k, arr)
    }
  }
  
  if (process.env.USERNAME === `PC`) {
    runProgram(`2
    5 31
    10 11 13 17 21
    5 44
    10 11 13 17 21`);
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
