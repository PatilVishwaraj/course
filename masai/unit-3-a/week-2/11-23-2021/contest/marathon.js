function runProgram(input) {
    input = input.trim().split('\n')
    var tests = +input[0]
    for (let i = 1; i <= tests; i++) {
      let [energy, dist] = input[i].trim().split(' ').map(Number)
      console.log(energy, dist)
    }
  }
  
  if (process.env.USERNAME === `PC`) {
    runProgram(`3
    1 5
    10 3
    3 4`);
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
  