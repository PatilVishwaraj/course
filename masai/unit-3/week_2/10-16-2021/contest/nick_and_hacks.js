var nickHacsk = (rupee) => {
if (rupee==1) {
  return "Yes"
} else {
  return "No"
}
}


function runProgram(input) {
  input = input.trim().split('\n').map(Number)
  var t = +input[0]
  for (let i = 1; i < t; i++) {
    var n = +input[i]
    console.log(nickHacsk(n))
  }
}

if (process.env.USERNAME === `Admin`) {
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
