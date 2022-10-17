// Masai Monetary System
function masaiMoney(amount) {
  if (amount <= 0) {
    return 0;
  }
  if (amount == 1) {
    return 1;
  }
  return (
    masaiMoney(Math.floor(amount / 2)) +
    masaiMoney(Math.floor(amount / 3)) +
    masaiMoney(Math.floor(amount / 4))
  );
}

function runProgram(input) {
  input = input.trim().split('\n').map(Number);
  for (let i = 0; i < input.length; i++) {
    console.log(masaiMoney(input[i]));
  }
}
// Ans
// 13
// 2
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`12
  2`);
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
