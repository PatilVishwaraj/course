function decrypt(str) {
  var ans = []
  for (let j = 0; j < str.length; j++) {
    if (str[j]=="#") {
      ans.pop()
    } else {
      ans.push(str[j])
    }
  }
  console.log(ans.join(''))
}

function runProgram(input) {
  input = input.trim().split('\n')
  var tests = +input[0]
  for (let i = 1; i <= tests; i++) {
    let str = input[i].trim()
    decrypt(str)
  }
}

if (process.env.USERNAME === `PC` || process.env.USERNAME === `Admin`) {
  runProgram(`2
  ab#d
  a#bc`);
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