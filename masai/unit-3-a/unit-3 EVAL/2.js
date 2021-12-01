function subSet(arr, sum, curr) {
  if (sum == 0) {
    console.log(sum.join(""));
  } else if (curr == arr.length) {
    return;
  }
  for (let i = curr; i < arr.length; i++) {
    sum.push(arr[i]);
    subSet(arr, sum, i + 1);
    sum.pop();
  }
}
function evenKSubset(N, arr, K, curr) {
  if (curr) {
    
  } else {
    
  }
  for (let i = curr; i < N; i++) {
    
    
  }
  
}



function runProgram(input) {
    input = input.trim().split('\n')
    // 
    var test = +input[0]
    for (let i = 1; i < test*2; i+=2) {
      var[N,K] = input[i].trim().split(' ').map(Number)
      var arr = input[i+1].trim().split(' ').map(Number)
      evenKSubset(N, arr, K, 0)
    }
  
  }
  
 if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`2
    4 2
    4 3 2 1
    2 1
    2 3`);
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
  