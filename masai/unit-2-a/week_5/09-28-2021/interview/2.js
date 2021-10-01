function pushZeros(n, arr) {
        for (let i = 0; i < n; i++) {
        if (arr[i]==0) {
            arr.push(arr[i])
            arr.splice(i, 1)
            i--
            n--
        }
    }
    console.log(arr.join(' '))
}

function runProgram(input) {
    input =input.trim().split('\n')
    for (let i = 1; i < input.length; i+=2) {
        var n = +input[i]
        var arr = input[i+1].trim().split(' ').map(Number)
        pushZeros(n, arr)
    }
}

if (process.env.USERNAME === `PC`) {
  runProgram(`2
  5
  0 1 2 3 0
  5
  0 0 1 2 3`);
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
