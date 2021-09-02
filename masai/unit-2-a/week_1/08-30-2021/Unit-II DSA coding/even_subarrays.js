function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    var array = input[1].trim().split(' ').map(Number)
    var count = 0
    for (let start = 0; start < n; start++) {
        for (let end = start+1; end < n; end++) {
            for (let j = start; j < end; j++) {
                var push = 1
                if (array[j]%2!==0) {
                    push = 0
                    break
                }
            }
            if (push) {
                count++
            }
            
        }
    }
    console.log(count)
}

if (process.env.USERNAME === `PC`) {
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
