function runProgram(input) {
    input = input.trim().split('\n')
    var N = +input[0]
    var arr1 = input[1].trim().split(' ').map(Number)
    var arr2 = input[2].trim().split(' ').map(Number)
    var count = -1
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        count++
        if (arr1[i]==arr2[j]) {
          arr2.splice(j, 1)
          break  
        }
      }
    }
    console.log(count)
  }
  
  if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`4
    1 2 3 4
    4 2 3 1`);
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
  