function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 1; i < input.length; i++) {
        var [candies, n, start] = input[i].trim().split(' ').map(Number);
        var ans = (start+candies-1)%n
        console.log(ans)
    }
  }
  if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
    runProgram(`5
    3 8 8
    9 5 7
    2 9 6
    3 8 2
    7 5 7`);
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
  