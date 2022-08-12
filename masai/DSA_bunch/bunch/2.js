// Compute Factorial A Modulus B
function factorial(num) {
  if (num==1) {
    return 1
  }
  return factorial(num-1)*num
}

function runProgram(input) {
  let [A, B] = input.trim().split("\n").map(Number);
  // let X = (factorial(A)) % B
  console.log(factorial(25))
}
// Ans 5
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`1
  25 29`);
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
