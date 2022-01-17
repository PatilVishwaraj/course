function findPair2(n, m, arr) {
    var count = 0
    for (let i = 0; i < n-1; i++) {
        for (let j = i+1; j < n; j++) {
            var sum = arr[i]+arr[j]
            if (sum%m==0) {
                count++
            }
        }
    }
    console.log(count)
}

function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 1; i < input.length; i+=2) {
        var [n, m] = input[i].trim().split(' ').map(Number)
        var arr = input[i+1].trim().split(' ').map(Number)
        findPair2(n, m, arr)
    }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  3 2
  1 3 2
  5 4
  3 2 2 1 5`);
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
