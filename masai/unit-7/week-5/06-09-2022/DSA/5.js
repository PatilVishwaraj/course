// Implement GCD
function gcd(num1, num2) {
  if (num1 == 0) return num2;
  return gcd(num2 % num1, num1);
}
function runProgram(input) {
  input = input.trim().split('\n');
  let tests = +input[0];
  for (let i = 1; i <= tests; i++) {
    let [num1, num2] = input[i].trim().split(' ').map(Number);
    console.log(gcd(num1, num2));
  }
}
// Ans 3
//     1
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  6 9
  2 25`);
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
