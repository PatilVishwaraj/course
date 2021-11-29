function nickHack(money) {
  if (money === 1) {
    return true;
  }
  if (money < 1) {
    return false;
  }
  return nickHack(money / 10) || nickHack(money / 20);
}

function runProgram(input) {
  input = input.trim().split("\n").map(Number);
  let test = input[0];
  for (let i = 1; i <= test; i++) {
    let money = input[i];
    let ans = nickHack(money);
    if (ans) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}

if (process.env.USERNAME === `PC`) {
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
