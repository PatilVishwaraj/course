function runProgram(input) {
    input = input.trim().split('\n')
    var N = +input[0]
    var queue = []
    for (let i = 1; i <= N; i++) {
        let [command, num] = input[i].trim().split(' ')
        num = +num
        if (command=="Push") {
            queue.push(num)
        } else if (command=="Pop") {
            if (queue.length>0) {
                let pop = queue.pop()
                console.log(pop)
            } else {
                console.log("Empty")
            }
        }
        // console.log(command, num)
    }

  }
  
  if (process.env.USERNAME === `PC`) {
    runProgram(`3
    Push 4
    Push 5
    Pop`);
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
  