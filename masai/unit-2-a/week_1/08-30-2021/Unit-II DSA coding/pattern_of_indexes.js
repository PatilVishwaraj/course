function runProgram(input) {
    for (let i = 0; i < +input; i++) {
        var ans = []
        for (let j = 0; j < +input; j++) {
            if (j%2==0) {
                ans.push(i)
            } else {
                ans.push(j)
            }
        }
        console.log(ans.join(' '))
    }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`5`);
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
