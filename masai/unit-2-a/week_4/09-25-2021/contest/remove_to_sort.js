function runProgram(input) {
    input = input.trim().split('\n')
    var n = +input[0]
    var array = input[1].trim().split(' ').map(Number)
    for (let i = 1; i < n; i++) {
        if (array[i]<array[i-1]) {
            array.splice(i, 1)
            i--
        }
    }
    console.log(array.join(" "))
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`10
  1 2 4 3 5 7 8 6 9 10`);
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
