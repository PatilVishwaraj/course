function sumOfLessThanK(n, k, arr) {
    var sum = 0
    for (let i = 0; i < n; i++) {
        if (arr[i]<=k) {
            sum+= arr[i]
        }
    }
    console.log(sum)
}

function runProgram(input) {
    input = input.trim().split('\n')
    var [n, k] = input[0].trim().split(' ').map(Number)
    var arr = input[1].trim().split(' ').map(Number)
    sumOfLessThanK(n, k, arr)
  }
  
  if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`4 2
    1 2 3 4`);
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
  