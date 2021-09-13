function runProgram(input) {
 input = input.trim().split('\n')
 var N = +input[0]
 var array = input[1].trim().split(' ')
 var fail = 1
  for (let i = 1; i < N-1; i++) {
    for (let j = 0; j < i; j++) {
      var left = 1
      if (array[i]<array[j]) {
        left = 0
        break
      }
    }
    for (let k = i+1; k < N; k++) {
      var right =1
      if (array[i]>array[k]) {
        right = 0
        break
      }
    }
    if (left && right) {
      console.log(+array[i])
      fail = 0
      break
    }
  }
  if (fail) {
    console.log(-1)
    
  }
}

if (process.env.USERNAME === `PC`) {
  runProgram(`5
  5 4 3 2 1`);
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
