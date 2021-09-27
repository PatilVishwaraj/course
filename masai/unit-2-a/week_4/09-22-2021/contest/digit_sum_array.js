function digitSum(n, arr) {
    for (let i = 0; i < n; i++) {
        var sum = 0
        for (let j = 0; j < arr[i].length; j++) {
            sum+= +arr[i][j]
        }
        arr[i]=sum
    }
    console.log(arr.join(' '))
}

function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 1; i < input.length; i+=2) {
        var n = +input[i];
        var arr = input[i+1].trim().split(' ');
        digitSum(n, arr)
    }
}

if (process.env.USERNAME === `PC`) {
  runProgram(`2
  5
  12 14 16 17 29
  6
  1 2 3 4 5 51`);
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
