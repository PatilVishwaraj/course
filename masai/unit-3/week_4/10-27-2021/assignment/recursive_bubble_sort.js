function recursiveBubbleSort(n, arr) {
  if (n==1) {
    console.log(arr)
    return 
  } else {
    for (let i = 0; i < n; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
      }
    }
    recursiveBubbleSort(n-1, arr)
  }
}


function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0]
    var arr = input[1].trim().split(' ').map(Number)
    recursiveBubbleSort(n, arr)
  }
  
  if (process.env.USERNAME === `Admin`) {
    runProgram(`5
    3 5 0 9 8`);
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
  