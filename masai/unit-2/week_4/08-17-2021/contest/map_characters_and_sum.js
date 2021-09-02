function runProgram(input) {
    input = input.trim().split('\n')
    var alphabets = 'abcdefghijklmnopqrstuvwxyz'
    var [n, k, str] = [+input[0], +input[1], input[2].trim()]
    var ans = 0
    for (let i = 0; i < k; i++) {
      for (let j = 0; j < 26; j++) {
        if (str[i]==alphabets[j]) {
          ans += n+j
        }
      }
    }
    console.log(ans)
}

if (process.env.USERNAME === `PC`) {
  runProgram(`30
  3
  abc`);
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
