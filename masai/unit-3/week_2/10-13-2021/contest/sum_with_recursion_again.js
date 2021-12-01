function recursionSum(n, arr) {
  if (n<=1) {
    return 0
  } else {
    var diff = arr[n-1]-arr[n-2]
    if (diff>=0) {
      return diff+recursionSum(n-1, arr)
    } else {
      return recursionSum(n-1, arr)-diff
    }
  }
}

function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 1; i < input.length; i+=2) {
      var n = +input[i]
      var arr = input[i+1].trim().split(' ').map(Number)
      console.log(recursionSum(n, arr))
    }
  }
  
 if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8`);
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
  