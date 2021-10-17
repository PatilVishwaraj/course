super_digit = (p) => {
  if (p.length == 1) {
    return p;
  } else {
    var sum = 0;
    for (let i = 0; i < p.length; i++) {
      sum += Number(p[i]);
    }
   sum = String(sum);
    return super_digit(sum);
  }
};

function runProgram(input) {
  var [n, k] = input.trim().split(" ").map(Number);
  var p = String(n);
  for (let i = 1; i < k; i++) {
    p += n;
  }
  console.log(super_digit(p));
}

if (process.env.USERNAME === `Admin`) {
  runProgram(`123 3`);
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
