function recursionSum(N, arr) {
  if (N<=1) {
    return 0
  } else {
    let diff
    if (arr[N-2]>arr[N-1]) {
      diff = arr[N-2]-arr[N-1]
    } else {
      diff = arr[N-1]-arr[N-2]
    }
    return diff + recursionSum(N-1, arr)
  }
}


function runProgram(input) {
    input = input.trim().split('\n')
    var test = +input[0]
    for (let i = 1; i < test*2; i+=2) {
      let N = +input[i]
      let arr = input[i+1].trim().split(' ').map(Number)
      console.log(recursionSum(N, arr))
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
  