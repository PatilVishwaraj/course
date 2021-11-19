var findSum = (n, arr) => {
  if (n==0) {
    return arr[0]
  } else {
    return findSum(n-1, arr)+ arr[n]
  }
}

function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 1; i < input.length; i+=2) {
      let n = +input[i];
      let arr = input[i+1].trim().split(' ').map(Number)
      console.log(findSum(n-1, arr))
    }
  }
  
  if (process.env.USERNAME === `Admin`) {
    runProgram(`3
    5
    6 3 8 2 -4
    5
    -10 -7 10 2 -2
    5
    -4 -5 6 -3 9`);
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
  