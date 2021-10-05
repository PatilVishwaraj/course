function smallToLeft(n, arr) {
    var stack = [arr[0]]
    var count = 1
    for (let i = 1; i < n; i++) {
      console.log(stack)
      var m = stack.length
      for (let j = m; j <= 0; j--) {
        if (arr[i]>stack[j]) {
        } else {
          stack.push(arr[i])
            count++
        }
        
      }
    }
    console.log(stack)
    console.log(count)
}

function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0]
    var arr = input[1].trim().split(' ').map(Number)
    smallToLeft(n, arr)
  }
  
  if (process.env.USERNAME === `PC`) {
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
  