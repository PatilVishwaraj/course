function solveEquation(N, arr) {
    let X = 0
    let Y = 0
    for (let i = 0; i < N; i++) {
        if (arr[i]%2==0) {
            X += arr[i]
        } else {
            Y += arr[i]
        }
    }
    let ans = (2*X)+(3*Y)
    console.log(ans)
}



function runProgram(input) {
    input = input.trim().split('\n')
    var N = +input[0]
    var arr = input[1].trim().split(' ').map(Number)
    solveEquation(N, arr)
  }
  
  if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`5
    1 2 3 4 5`);
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
  