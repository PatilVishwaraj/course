function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0].trim()
    var arr = input[1].trim().split('')
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var lowercase = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 26; j++) {
            if (arr[i]==uppercase[j]) {
                arr[i]=lowercase[j]
            }
        }
    }
    console.log(arr.join(''))
}

if (process.env.USERNAME === `PC`) {
  runProgram(`5
  abAbC`);
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
