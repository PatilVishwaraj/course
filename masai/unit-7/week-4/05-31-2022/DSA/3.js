// Nick and Hacks
const nickHacks = (rupee) => {
  if (rupee == 1) {
    return true;
  } else if (rupee < 1) {
    return false;
  } else {
    return nickHacks(rupee / 10) || nickHacks(rupee / 20);
  }
};
function runProgram(input) {
  input = input.trim().split('\n').map(Number);
  var t = +input[0];
  for (let i = 1; i <= t; i++) {
    var n = +input[i];
    var possible = nickHacks(n);
    if (possible) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  }
}
// Ans Yes
//     No
//     Yes
//     No
//     Yes
if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`5
  1
  2
  10
  25
  200`);
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
