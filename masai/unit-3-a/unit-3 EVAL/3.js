function SNE(N, arr) {
  var stack = arr[N-1]
  var count = 1
  for (let i = N-2; i >= 0; i--) {
    // console.log(i, stack, count)
    if (stack>=arr[i]) {
      count++
      stack = arr[i]
    }
  }
  console.log(count)
}


function runProgram(input) {
    input = input.trim().split('\n')
    var N = +input[0]
    var arr = input[1].trim().split(' ').map(Number)
    SNE(N, arr)
  }
  
  if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`5
    4 2 1 3 7`);
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
  