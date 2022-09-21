// Prime Sum Up
function isPrime(N) {
  let x = Math.floor(Math.sqrt(N));
  let j = x;
  while (j >= 2) {
    if (N % j === 0) {
      return false;
    }
    j--;
  }
  return true;
}
function primeSumUp(num) {
  let itration = num;
  let sum = 0;
  while (itration >= 2) {
    if (isPrime(itration) === true) {
      sum += itration;
    }
    itration--;
  }
}
function runProgram(input) {
  num = +input;
  console.log(primeSumUp(num));
}
// Ans 41
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`13`);
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
