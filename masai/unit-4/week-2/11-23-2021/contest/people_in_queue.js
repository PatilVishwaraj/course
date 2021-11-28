function runProgram(input) {
    input = input.trim().split('\n')
    var [K, Q] = input[0].trim().split(' ').map(Number)
    var queue = []
    for (let i = 1; i <= Q; i++) {
      let [command, num] = input[i].trim().split(' ').map(Number)
      if (command==1) {
        if (queue.length<K) {
          queue.push(num)
          console.log(num)
        } else {
          console.log(-1)
        }
      } else if (command==2) {
        if (queue.length>0) {
          let shift = queue.shift()
          console.log(shift)
        } else {
          console.log(-1)
        }
      }
    }
  }
  
  if (process.env.USERNAME === `PC`) {
    runProgram(`2 6
    1 1
    1 2
    1 3
    2
    2
    2`);
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
  