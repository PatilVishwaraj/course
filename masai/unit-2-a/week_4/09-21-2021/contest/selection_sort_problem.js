function runProgram(input) {
input = input.trim().split('\n')
var n = +input[0]
var arr = input[1].trim().split(' ').map(Number)
var temp = 0
for (let i = 0; i < n-1; i++) {
    var min = i
    for (let j = i; j < n; j++) {
        if (arr[i]>arr[j]) {
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}
console.log(arr.join(' '))
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`5
  3 5 0 9 8`);
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
