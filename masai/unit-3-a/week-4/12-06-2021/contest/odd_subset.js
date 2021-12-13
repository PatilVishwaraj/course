var count = 0

function findOddSubset(N, arr, ans, pointer) {
  // console.log('sum:', sum)
  
  if (pointer>N) {
    if (sum%2==1) {
      count++
    }
    return
  }
  for (let i = pointer; i < N; i++) {
    sum += arr[i]
    findOddSubset(N, arr, sum, i+1)
    sum -= arr[i]
  }
}


function runProgram(input) {
    input = input.trim().split('\n')
    let N = +input[0]
    let arr = input[1].trim().split(' ')
    let arr2 = 
    // .map(Number)
    findOddSubset([], arr2, [], 0)
    // findOddSubset(N, arr, 0, 0)
    // console.log(count)
    // console.log(N, arr)
  }
  
  if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`3
    1 2 3`);
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
  