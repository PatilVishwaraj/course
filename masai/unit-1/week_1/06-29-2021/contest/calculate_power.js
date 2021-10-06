function fastPower(a, b, mod) {
  if (b == 0) {
    return 1;
  } else if (b == 1) {
    return a % mod;
  } else if (b % 2) {
    var temp = fastPower(a, (b - 1)/2, mod);
    temp = temp % mod;
    return (a * temp * temp) % mod;
  } else {
    var temp = fastPower(a, b / 2, mod);
    temp = temp % mod;
    return (temp * temp) % mod;
  }
}

function runProgram(input) {
  var [a, b] = input.trim().split(" ").map(Number);
  var mod = 1000000000 + 7;
  console.log(fastPower(a, b, mod)% mod);
}

if (process.env.USERNAME === `PC`) {
  runProgram(`10 20`);
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
