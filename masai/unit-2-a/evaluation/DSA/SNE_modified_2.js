function smallToLeft(n, arr) {
    var smallest = arr[0]
    var count = 0
    for (let i = 1; i < n; i++) {
        if (arr[i]>smallest) {
            count++
        } else {
            smallest = arr[i]
        }
    }
    console.log(count)
}

function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0]
    var arr = input[1].trim().split(' ').map(Number)
    smallToLeft(n, arr)
  }
  
  if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`8
    39 27 11 4 24 32 32 1`);
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
  