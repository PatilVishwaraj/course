function countOddSubArray(n, array) {
    var count = 0
    for (let start = 1; start < n; start++) {
        for (let end = start+1; end <= n; end++) {
            if ((start+end)%2!==0) {
                count++
                console.log(start, end)
            }
        }
    }
    console.log(count)
}

function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 1; i < input.length; i+=2) {
        var n = +input[i].trim()
        var array = input[i+1].trim().split(' ').map(Number)
        countOddSubArray(n, array)
    }
}

if (process.env.USERNAME === `PC`) {
  runProgram(`2
  10
  1 2 3 4 5 6 7 8 9 10
  5
  1 2 3 4 5`);
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
