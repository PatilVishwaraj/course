function checkpPalindrome(N, str) {
    var obj = {}

    for (let i = 0; i < N; i++) {
        if (obj[str[i]]) {
            obj[str[i]]++
        } else {
            obj[str[i]]=1
        }
    }
    var count = 0
    for (const key in obj) {
            if (obj[key]%2!==0) {
                count++
            }
    }
    if (count>1) {
        console.log('No')
    } else {
        console.log('Yes')
    }
}

function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 1; i <= +input[0]*2; i+=2) {
        var N = +input[i]
        var str = input[i+1].trim()
        checkpPalindrome(N, str)
    }
}

if (process.env.USERNAME === `PC`) {
  runProgram(`3
  1
  a
  3
  aab
  4
  abbb`);
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
