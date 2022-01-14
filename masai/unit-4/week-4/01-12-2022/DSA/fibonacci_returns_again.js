// Fibonacci Returns Again

function fibonacci(num) {
  if (num <= 1) {
    return num;
  } else {
    let i = 2;
    let num1 = 0;
    let num2 = 1;
    while (i <= num) {
      let num3 = num1 + num2;
      i++;
      num1 = num2;
      num2 = num3;
    }
    console.log(num2);
  }
}

function runProgram(input) {
  input = +input;
  fibonacci(input);
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`5`);
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
