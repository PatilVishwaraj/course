function findNearestSmaller(n, arr) {
  var ans = []
  // var smaller = []
  for (let i = 0; i < n; i++) {
    let found = 0
    let left = i-1
    let right = i+1
    while (left==0 && right==n-1) {
      if (arr[left]<arr[i]) {
        ans.push(arr[left])
        found++
        break
      } else if (arr[right]<arr[i]) {
        ans.push(arr[right])
        found++
        break
      } 
      left--
      right++
    }
    if (found==0) {
        ans.push(-1)
    }
  }
  console.log(ans.join(' '))
}


function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 1; i < input.length; i+=2) {
      let n = +input[i];
      let arr = input[i+1].trim().split(' ').map(Number)
      findNearestSmaller(n, arr)
    }
  
  }
  
  if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`1
    8
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
  