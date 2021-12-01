function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 1; i < input.length; i+=2) {
        var arr = input[i+1].trim().split(' ').map(Number)
        var ans = arr.reduce(function(ac, el) {
          if (el%2!==0) {
            ac += el
          }
          return ac
      },0)
      if (ans%2!==0) {
        console.log("It is Odd")
      } else {
        console.log("It is Even")
      }
    }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  3
  1 2 3
  5
  2 2 2 2 1`);
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
