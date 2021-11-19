function generateSequence(str, ans, curr) {
  if (ans.length > 0) {
    console.log(ans.join(""));
  } else if (curr == str.length) {
    return;
  }
  for (let i = curr; i < str.length; i++) {
    ans.push(str[i]);
    generateSequence(str, ans, i + 1);
    ans.pop();
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  var n = +input[0];
  var str = input[1].trim().split("");
  generateSequence(str, [], 0);
}

if (process.env.USERNAME === `Admin`) {
  runProgram(`4
    abcd`);
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
